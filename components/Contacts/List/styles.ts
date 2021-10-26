import { SxProps } from '@mui/material/node_modules/@mui/system';
import { blue } from '@mui/material/colors';

export const Container: SxProps = {
  maxWidth: '400px',
  padding: '15px',
  border: `2px solid ${blue[500]}`,
  borderRadius: '15px',
};

export const ListPhone: SxProps = {
  maxWidth: '100%',
};

export const ItemListPhone: SxProps = {
  paddingLeft: 0,
};
