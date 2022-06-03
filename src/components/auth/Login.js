import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/', { replace: true });
    } catch {
      setError('Failed to log in');
    }
    setLoading(false);
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h3 className="cardHeader">Log in</h3>
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
            <Button
              style={{ marginLeft: '335px' }}
              disabled={loading}
              type="submit"
            >
              Log in
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-white mt-2 fs-20">
        Need an account?{' '}
        <Link style={{ color: '#21c6f6' }} to="/signup">
          Sign up
        </Link>
      </div>
      <div className="text-white mt-3 w-100 fs-20">
        <Link style={{ color: '#21c6f6' }} to="/forgot-password">
          Forgot password?
        </Link>
      </div>
    </>
  );
}

export default Login;
