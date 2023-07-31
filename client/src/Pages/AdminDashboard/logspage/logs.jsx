import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Dialog, DialogContent } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EditPopup from './editlogspopup'; // Import the EditPopup component

const LogsTable = () => {
  const [logs, setLogs] = useState([]);
  const [editLogId, setEditLogId] = useState(null); // State to track the logId for editing

  useEffect(() => {
    async function fetchLogs() {
      try {
        const response = await axios.get('http://localhost:8000/log/getall', {
          withCredentials: true,
        });
        setLogs(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchLogs();
  }, []);

  const handleEdit = (logId) => {
    // Open the edit popup by setting the editLogId state
    setEditLogId(logId);
  };

  const handleClosePopup = () => {
    // Close the edit popup by resetting the editLogId state
    setEditLogId(null);
  };

  return (
    <TableContainer component={Paper} elevation={0} variant="outlined">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Log Level</TableCell>
            <TableCell>Component</TableCell>
            <TableCell>Log Message</TableCell>
            <TableCell>Event</TableCell>
            <TableCell>Solution</TableCell>
            <TableCell>Action</TableCell> {/* New column for Edit button */}
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map((log) => (
            <TableRow key={log._id}>
              <TableCell>{log.logLevel}</TableCell>
              <TableCell>{log.component}</TableCell>
              <TableCell>{log.logMessage}</TableCell>
              <TableCell>{log.event}</TableCell>
              <TableCell>{log.solution}</TableCell>
              <TableCell>
                <IconButton
                  onClick={() => handleEdit(log._id)}
                  aria-label="edit"
                  color="primary"
                >
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Render the EditPopup component within a Dialog */}
      <Dialog open={!!editLogId} onClose={handleClosePopup}>
        <DialogContent>
          {editLogId && <EditPopup logId={editLogId} onClose={handleClosePopup} />}
        </DialogContent>
      </Dialog>
    </TableContainer>
  );
};

export default LogsTable;
