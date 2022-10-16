--# write your statement here: you will be given a table 'moves' with columns 'position' and 'roll'. return a table with a column 'res'. #--
SELECT (moves.position + moves.roll * 2) AS res 
FROM moves;
