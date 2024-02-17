'use client';
import { Button } from '@/src/components/Button';
import { Select, MenuItem } from '@mui/material';

export default function Dashboard() {
  return (
    <div>
      <span>qweq</span>
      <Button color="error" onClick={console.log}>
        Some btn
      </Button>
      <Select value="1" label="asdasd">
        <MenuItem value="1" title="qweqweqe">
          qweqwewq
        </MenuItem>
        <MenuItem value="2" title="qweqweqe">
          qweqwewq
        </MenuItem>
        <MenuItem value="3" title="qweqweqe">
          qweqwewq
        </MenuItem>
        <MenuItem value="4" title="qweqweqe">
          qweqwewq
        </MenuItem>
      </Select>
    </div>
  );
}
