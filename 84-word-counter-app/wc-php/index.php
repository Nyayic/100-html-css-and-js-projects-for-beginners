<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word Counter App</title>
</head>
<body>

<?php
    // Function to count words
    function countWords($text) {
        // Remove extra whitespaces
        $text = trim($text);
        // Count words
        $wordCount = str_word_count($text);
        return $wordCount;
    }

    // Initialize variables
    $inputText = '';
    $result = '';

    // Check if the form is submitted
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Get user input
        $inputText = isset($_POST['text']) ? $_POST['text'] : '';

        // Count words
        $result = countWords($inputText);
    }
?>

    <h1>Word Counter App</h1>

    <form method="post" action="">
        <label for="text">Enter text:</label>
        <br>
        <textarea name="text" rows="5" cols="40"><?php echo htmlspecialchars($inputText); ?></textarea>
        <br>
        <input type="submit" value="Count Words">
    </form>

    <?php
        // Display result if available
        if ($result !== '') {
            echo '<p>Word count: ' . $result . '</p>';
        }
    ?>

</body>
</html>
