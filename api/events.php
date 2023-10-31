<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

class JsonController {
    private $jsonFile = __DIR__ . '/../../private/data.json';

    public function getById($eventId) {
        $jsonData = file_get_contents($this->jsonFile);
        $data = json_decode($jsonData, true);

        foreach ($data['events'] as $event) {
            if ($event['id'] == $eventId) {
                header('Content-Type: application/json');
                echo json_encode($event);
                return;
            }
        }

        header('Content-Type: application/json');
        echo json_encode(['error' => 'Event not found']);
    }

    public function updateReservation() {
        $postData = json_decode(file_get_contents('php://input'), true);
        $eventId = $postData['id'];
        $name = $postData['name'];
        $email = $postData['email'];
        $password = $postData['password'];
        $message = $postData['message'];
    
        $jsonData = file_get_contents($this->jsonFile);
        $data = json_decode($jsonData, true);
    
        $foundEvent = false;
        $reservedEventDate = null;
        foreach ($data['events'] as &$event) {
            if ($event['id'] == $eventId) {
                if ($event['hasReservation']) {
                    header('Content-Type: application/json');
                    echo json_encode(['error' => 'Event is already reserved']);
                    return;
                }
    
                $event['name'] = $name;
                $event['email'] = $email;
                $event['hasReservation'] = true;
                $reservedEventDate = date('d.m.Y', strtotime($event['date'])); // Upravit formát data
                $foundEvent = true;
            }
        }
    
        if (!$foundEvent) {
            header('Content-Type: application/json');
            echo json_encode(['error' => 'Event not found']);
            return;
        }
    
        $passwordEntry = [
            'id' => $eventId,
            'password' => $password,
            'message' => $message
        ];
    
        $data['passwords'][] = $passwordEntry;
    
        $updatedData = json_encode($data, JSON_PRETTY_PRINT);
        file_put_contents($this->jsonFile, $updatedData);
    
        // Odeslat e-mail
        $to = 'bosksi@gmail.com';
        $subject = 'Rezervace události';
        $message = 'Vytvoření rezervace události s termínem: ' . $reservedEventDate . '<br>';
        $message .= 'Jméno: ' . $name . '<br>'; // Přidat jméno
        $message .= 'E-mail uživatele: ' . $email . '<br>'; // Přidat email
        $message .= 'Zpráva: ' . $postData['message']; // Přidat zprávu
    
        $headers = "From: your-email@example.com\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
        mail($to, $subject, $message, $headers);
    
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Reservation updated']);
    }
    
    

    public function processJsonData() {
        $jsonData = file_get_contents($this->jsonFile);
        $data = json_decode($jsonData, true);
        $events = $data['events'];

        header('Content-Type: application/json');
        echo json_encode($events);
    }
    public function cancelReservation() {
        $eventId = $_GET['id'];
        $password = $_GET['password'];
        $message = urldecode($_GET['message']);
        $userName = $_GET['name']; // Získat jméno uživatele
    
        $jsonData = file_get_contents($this->jsonFile);
        $data = json_decode($jsonData, true);
    
        $foundEvent = false;
        $cancelledEventEmail = null;
        $cancelledEventDate = null;
        foreach ($data['events'] as &$event) {
            if ($event['id'] == $eventId) {
                $eventPassword = $this->getEventPassword($data, $eventId);
                if ($eventPassword !== $password) {
                    header('Content-Type: application/json');
                    echo json_encode(['error' => 'Invalid password']);
                    return;
                }
    
                $event['hasReservation'] = false;
                $cancelledEventEmail = $event['email'];
                $event['email'] = '';
                $event['name'] = '';
                $cancelledEventDate = date('d.m.Y', strtotime($event['date'])); // Upravit formát data
    
                $this->removeEventPassword($data, $eventId);
    
                $foundEvent = true;
                break;
            }
        }
    
        if (!$foundEvent) {
            header('Content-Type: application/json');
            echo json_encode(['error' => 'Event not found']);
            return;
        }
    
        $updatedData = json_encode($data, JSON_PRETTY_PRINT);
        file_put_contents($this->jsonFile, $updatedData);
    
        // Odeslat e-mail
        $to = 'bosksi@gmail.com';
        $subject = 'Zrušení rezervace události';
        $emailMessage = 'Zrušení rezervace události s termínem: ' . $cancelledEventDate . '<br>';
        $emailMessage .= 'Jméno uživatele: ' . $userName . '<br>'; 
        $emailMessage .= 'E-mail uživatele, který zrušil rezervaci: ' . $cancelledEventEmail . '<br>';
        $emailMessage .= 'Zpráva: ' . $message; // Přidat zprávu
        
        $headers = "From: your-email@example.com\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        
        mail($to, $subject, $emailMessage, $headers);
    
        header('Content-Type: application/json');
        echo json_encode(['message' => 'Reservation canceled']);
    }

    public function handleContactForm() {
        $postData = json_decode(file_get_contents('php://input'), true);
        $name = $postData['name'];
        $email = $postData['email'];
        $phone = $postData['phone'];
        $message = $postData['message'];
        $services = $postData['services'];

        // Odeslat e-mail
        $to = 'bosksi@gmail.com';
        $subject = 'Nová zpráva ze stránky';
        $emailMessage = 'Nová zpráva ze stránky:<br>';
        $emailMessage .= 'Jméno a příjmení: ' . $name . '<br>';
        $emailMessage .= 'E-mail: ' . $email . '<br>';
        $emailMessage .= 'Telefon: ' . $phone . '<br>';
        $emailMessage .= 'Zpráva: ' . $message . '<br>';

        $emailMessage .= 'Vybrané služby:<br>';
        foreach ($services as $service) {
            $emailMessage .= '- ' . $service . '<br>';
        }

        $headers = "From: your-email@example.com\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        mail($to, $subject, $emailMessage, $headers);

        header('Content-Type: application/json');
        echo json_encode(['message' => 'E-mail sent']);
    }
    
    

    private function getEventPassword($data, $eventId) {
        foreach ($data['passwords'] as $passwordData) {
            if ($passwordData['id'] == $eventId) {
                return $passwordData['password'];
            }
        }
        return null;
    }

    private function removeEventPassword(&$data, $eventId) {
        foreach ($data['passwords'] as $key => $passwordData) {
            if ($passwordData['id'] == $eventId) {
                unset($data['passwords'][$key]);
                break;
            }
        }
    }

    public function getAllPasswords() {
        $jsonData = file_get_contents($this->jsonFile);
        $data = json_decode($jsonData, true);
        $passwords = $data['passwords'];

        header('Content-Type: application/json');
        echo json_encode($passwords);
    }
}

$controller = new JsonController();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        $eventId = $_GET['id'];
        $controller->getById($eventId);
    } elseif (isset($_GET['getPasswords'])) {
        $controller->getAllPasswords();
    } else {
        $controller->processJsonData();
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_GET['contactForm'])) {
        $controller->handleContactForm();
    } else {
        $controller->updateReservation();
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $controller->cancelReservation();
}
?>
