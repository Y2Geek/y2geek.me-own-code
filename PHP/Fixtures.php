<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<?php
		$trimAll = function($data)
{
	// Separate all data into an array using the comma
	$tmp = explode(',', $data);
	$newData = array();

	// Now trim whitespace and <br /> characters 
	foreach($tmp as $section)
	{
		$tmp1 = trim($section, '<br />');
		$tmp1 = trim($tmp1);
		$newData[] = $tmp1;
	}

	// Return results
	return $newData;
};
$separateTeams = function($data)
{
	$teams = array();
	$i = 0;
	while($i < count($data))
	{
		$tmp = array($data[$i], $data[$i + 1]);
		$teams[] = $tmp;
		$i += 2;
	}
	return $teams;
};
$output = function($headers, $teams)
{
	echo '<table class="is-style-stripes wp-block-table">';

	if($headers == 'true')
	{
		echo '<th>Home</th><th></th><th></th><th>Away</th>';
	}

	$i = 0;
	while($i < count($teams)) 
	{	
		echo '<tr>';
		// Perform same action for two teams
		$j = 0;
		while($j < 2)
		{
			// Set each part of the row
			echo '<td>' . $teams[$i][0] . '</td>';
			echo '<td>' . $teams[$i][1] . '</td>';
			$i++;
			$j++;
		}
		echo '</tr>';
	}
	echo '</table>';
};
	

		// Trim all data and create array
		$data = 'team1, 0, team2, 0, team3, 0, team4, 0, team5, 0, team6, 0, team7, 0, team8, 0';
		$data = $trimAll($data);
		$teams = $separateTeams($data);
		$reverse = "true";
		if($reverse == 'true')
		{
			$output($showtableheadings, array_reverse($teams));
		}
		else
		{
			$output($showtableheadings, $teams);
		}
	?>
</body>
</html>