<?php 
$puzzle = json_decode(file_get_contents('../../puzzle.json'), true);
$result = json_decode(file_get_contents('../../result.json'), true);

$solution = 0;
foreach (preg_split("/\D/", $puzzle) as $v) {
    $solution += (int)$v;
}

function isSolutionCorrect() {
    global $solution, $result;
    return json_encode($solution) === json_encode($result);
}

echo $solution . "\n";
echo 'Is solution correct? ' . (isSolutionCorrect() ? 'Yes' : 'No');
?>
