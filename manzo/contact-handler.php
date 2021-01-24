<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'mmbalbuena@up.edu.ph';

    $email_subject = 'New Form Submission';

    $email_body ='User Name: $name.\n'.
                    'User Email: $email.\n'.
                        'User Message: $message.\n';

    $to = 'mmbalbuena@up.edu.ph';











?>