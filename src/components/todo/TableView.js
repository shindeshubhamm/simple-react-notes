import React from 'react';

import { Table, Button } from 'react-bootstrap';
import { RiCloseLine } from 'react-icons/ri';
import { FcCheckmark } from 'react-icons/fc';

const TableView = (props) => {
    const { data, onViewUser } = props;

    return (
        <Table striped bordered>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((t, index) => (
                    <tr key={t.id}>
                        <td>{index + 1}</td>
                        <td>{t.title}</td>
                        <td style={{ textAlign: 'center' }}>
                            {t.completed ? (
                                <FcCheckmark />
                            ) : (
                                <RiCloseLine color='red' />
                            )}
                        </td>
                        <td style={{ width: '110px' }}>
                            <a href='#userdata'>
                                <Button
                                    size='sm'
                                    onClick={() => onViewUser(t.userId, t.id)}>
                                    View User
                                </Button>
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default TableView;
