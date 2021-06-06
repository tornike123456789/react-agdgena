import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import User from '../../components/user';
import NavBar from '../../components/navBar';

const Users = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    let [users, setUsers] = useState();

    const [filteredUsers, setFilteredUsers] = useState();

    const [dropdown, setDropdown] = useState(false);

    const inputRef = useRef();
    const nameInputRef = useRef();
    const emailInputRef = useRef();

    useEffect(() => {
        fetch('https://fakerapi.it/api/v1/users?_quantity=20}', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(res => res.json())
            .then(({ data }) => {
                setUsers(data);
                setFilteredUsers(data.slice(0, 10));
            });
    }, []);

    const filterQuantity = quantity => {
        const usersToFilter = [...users];
        setFilteredUsers(usersToFilter.slice(0, quantity));
        setDropdown(false);
    };

    const filterByName = () => {
        const usersToFilter = [...filteredUsers];
        const name = nameInputRef.current.value;
        if (name) {
            setFilteredUsers(
                usersToFilter.filter(item => item.firstname === name)
            );
        }
    };

    const filterByLastName = () => {
        const usersToFilter = [...filteredUsers];
        const lastName = inputRef.current.value;
        if (lastName) {
            setFilteredUsers(
                usersToFilter.filter(item => item.lastname === lastName)
            );
        }
    };

    const filterByEmail = () => {
        const usersToFilter = [...filteredUsers];
        const email = emailInputRef.current.value;
        if (email) {
            setFilteredUsers(
                usersToFilter.filter(item => item.email === email)
            );
        }
    };
    const deleteFunction = email => {
        const usersToFilter = [...filteredUsers];
        setFilteredUsers(usersToFilter.filter(item => item.email !== email));
    };

    const onSubmit = data => {
        setFilteredUsers([...filteredUsers, data]);
    };
    return (
        <>
            <div className="add-form">
                <NavBar />

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="log-in-form col"
                >
                    <div className="input-group mb-3">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            uuid
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            {...register('uuid', { required: true })}
                        />
                    </div>
                    {errors.uuid && (
                        <span className="text-danger form-text">
                            {errors.uuid.type === 'required' &&
                                'uuid is required'}
                        </span>
                    )}
                    <div className="input-group mb-3">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            firstname
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            {...register('firstname', { required: true })}
                        />
                    </div>
                    {errors.firstname && (
                        <span className="text-danger form-text">
                            {errors.firstname.type === 'required' &&
                                'firstname is required'}
                        </span>
                    )}
                    <div className="input-group mb-3">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            lastname
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            {...register('lastname', { required: true })}
                        />
                    </div>
                    {errors.lastname && (
                        <span className="text-danger form-text">
                            {errors.lastname.type === 'required' &&
                                'lastname is required'}
                        </span>
                    )}
                    <div className="input-group mb-3">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            username
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            {...register('username', { required: true })}
                        />
                    </div>
                    {errors.username && (
                        <span className="text-danger form-text">
                            {errors.username.type === 'required' &&
                                'username is required'}
                        </span>
                    )}
                    <div className="input-group mb-3">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            password
                        </span>
                        <input
                            type="password"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            {...register('password', { required: true })}
                        />
                    </div>
                    {errors.password && (
                        <span className="text-danger form-text">
                            {errors.password.type === 'required' &&
                                'password is required'}
                        </span>
                    )}
                    <div className="input-group mb-3">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            email
                        </span>
                        <input
                            type="email"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            {...register('email', { required: true })}
                        />
                    </div>
                    {errors.email && (
                        <span className="text-danger form-text">
                            {errors.email.type === 'required' &&
                                'email is required'}
                        </span>
                    )}
                    <div className="input-group mb-3">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            ip
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            {...register('ip', { required: true })}
                        />
                    </div>
                    {errors.ip && (
                        <span className="text-danger form-text">
                            {errors.ip.type === 'required' && 'ip is required'}
                        </span>
                    )}
                    <div className="input-group mb-3">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            macAddress
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            {...register('macAddress', { required: true })}
                        />
                    </div>
                    {errors.macAddress && (
                        <span className="text-danger form-text">
                            {errors.macAddress.type === 'required' &&
                                'macAddress is required'}
                        </span>
                    )}
                    <div className="input-group mb-3">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Website
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            {...register('website', { required: true })}
                        />
                    </div>
                    {errors.website && (
                        <span className="text-danger form-text">
                            {errors.website.type === 'required' &&
                                'Website is required'}
                        </span>
                    )}

                    <div>
                        <button type="submit" className="btn btn-primary">
                            Add New User
                        </button>
                    </div>
                </form>
            </div>
            <div className="container user">
                <div className="user-filter">
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="false"
                            onClick={() => setDropdown(!dropdown)}
                        >
                            users quantity
                        </button>
                        {dropdown && (
                            <div className="dropdown-menu">
                                <span
                                    onClick={() => filterQuantity(10)}
                                    className="dropdown-item"
                                >
                                    10
                                </span>
                                <span
                                    onClick={() => filterQuantity(15)}
                                    className="dropdown-item"
                                >
                                    15
                                </span>
                                <span
                                    onClick={() => filterQuantity(20)}
                                    className="dropdown-item"
                                >
                                    20
                                </span>
                            </div>
                        )}
                    </div>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            filterByName();
                        }}
                        className="input-group mb-3"
                    >
                        <input
                            ref={nameInputRef}
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="filter by Firstname"
                        />
                    </form>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            filterByLastName();
                        }}
                        className="input-group mb-3"
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="filter by Lastname"
                        />
                    </form>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            filterByEmail();
                        }}
                        className="input-group mb-3"
                    >
                        <input
                            ref={emailInputRef}
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="filter by Email"
                        />
                    </form>
                </div>
                <div className="row list-group-item">
                    <span className="user-item">uuid</span>
                    <span className="user-item">firstname</span>
                    <span className="user-item">lastname</span>
                    <span className="user-item">username</span>
                    <span className="user-item">email</span>
                    <span className="user-item">ip</span>
                    <span className="user-item">macAddress</span>
                    <span className="user-item">website</span>
                    <span className="user-item">image</span>
                </div>
                {filteredUsers &&
                    filteredUsers.map((item, index) => (
                        <User
                            key={item.name + index}
                            data={item}
                            deleteFun={deleteFunction}
                        />
                    ))}
            </div>
        </>
    );
};

Users.propTypes = {
    quantity: PropTypes.number,
};

export default Users;
