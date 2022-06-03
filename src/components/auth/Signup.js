import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/', { replace: true });
    } catch (e) {
      setError('Failed to create user account ' + e.message);
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h3 className="cardHeader">Sign Up</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form className="formGroup" onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="formLabel">Email</Form.Label>
              <Form.Control
                className="formInput"
                type="email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label className="formLabel">Password</Form.Label>
              <Form.Control
                className="formInput"
                type="password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Form.Group id="passwordConfirm">
              <Form.Label className="formLabel">Confirm Password</Form.Label>
              <Form.Control
                className="formInput"
                type="password"
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <Button
              style={{ marginLeft: '325px' }}
              disabled={loading}
              type="submit"
            >
              Sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="fs-20 w-100 text-white mt-2">
        Already have an account?{' '}
        <Link style={{ color: '#21c6f6' }} to="/login">
          Log in
        </Link>
      </div>
    </>
  );
}

export default Signup;
