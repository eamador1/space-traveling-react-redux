import React from 'react';
import Table from 'react-bootstrap/Table';
import '../styles/MissionList.css';

const MissionList = () => (
  <div className="mission-list">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
    </Table>
  </div>
);

export default MissionList;
