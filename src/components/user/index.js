import React from 'react';

const User = ({ data, deleteFun }) => {
    return (
        <div
            onClick={() => deleteFun(data.email)}
            className="row list-group-item"
        >
            <span className="user-item">{data.uuid}</span>
            <span className="user-item">{data.firstname}</span>
            <span className="user-item">{data.lastname}</span>
            <span className="user-item">{data.username}</span>
            <span className="user-item">{data.email}</span>
            <span className="user-item">{data.ip}</span>
            <span className="user-item">{data.macAddress}</span>
            <span className="user-item">{data.website}</span>
            {data.image && (
                <img alt="user" className="user-item" src={data.image} />
            )}
        </div>
    );
};

export default User;
