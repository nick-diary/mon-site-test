import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Title() {
  return (
    <Box sx={{ position: 'relative', width: '100%', }}>
      <Typography variant="h4" gutterBottom>
        Discovering Godrogodro Fast Food: A Flavorful Journey of Speed and Taste
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        In the fast-paced world of food, Godrogodro Fast Food has quickly become a go-to destination for those who crave delicious, satisfying meals on the go. Whether you're a busy professional, a student, or someone just looking for a quick bite, Godrogodro offers a unique twist on traditional fast food.
      </Typography>
    </Box>
  );
}
