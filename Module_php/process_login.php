<?php
// Récupérer les données du formulaire
$username = $_POST['username'];
$password = $_POST['password'];

// Vérifier si les champs sont remplis
if (!empty($username) && !empty($password)) {
    // Stocker les informations dans un fichier (par exemple users.txt)
    $file = 'users.txt';
    $data = $username . ',' . $password . PHP_EOL;
    file_put_contents($file, $data, FILE_APPEND);

    // Rediriger l'utilisateur vers une page de succès
    header('Location: index.php');
    exit;
} else {
    // Rediriger l'utilisateur vers une page d'erreur
    header('Location: connexion.html');
    exit;
}
?>
