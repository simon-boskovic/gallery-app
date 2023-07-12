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

        $jsonData = file_get_contents($this->jsonFile);
        $data = json_decode($jsonData, true);

        $foundEvent = false;
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
                $foundEvent = true;
            }
        }

        if (!$foundEvent) {
            header('Content-Type: application/json');
            echo json_encode(['error' => 'Event not found']);
            return;
        }

        $passwordEntry = ['id' => $eventId, 'password' => $password];
        $data['passwords'][] = $passwordEntry;

        $updatedData = json_encode($data, JSON_PRETTY_PRINT);
        file_put_contents($this->jsonFile, $updatedData);

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

        $jsonData = file_get_contents($this->jsonFile);
        $data = json_decode($jsonData, true);

        $foundEvent = false;
        foreach ($data['events'] as &$event) {
            if ($event['id'] == $eventId) {
                $eventPassword = $this->getEventPassword($data, $eventId);
                if ($eventPassword !== $password) {
                    header('Content-Type: application/json');
                    echo json_encode(['error' => 'Invalid password']);
                    return;
                }

                $event['hasReservation'] = false;
                $event['email'] = '';
                $event['name'] = '';

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

        header('Content-Type: application/json');
        echo json_encode(['message' => 'Reservation canceled']);
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
    $controller->updateReservation();
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $controller->cancelReservation();
}
?>
