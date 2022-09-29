SELECT x,
  CASE
    WHEN TRUE THEN replace(x, ' ', '')
    END AS res
  FROM nospace;
