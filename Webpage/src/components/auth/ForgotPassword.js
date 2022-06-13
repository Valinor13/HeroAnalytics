import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';

// ForgotPassword - Displays form to send password reset email.
//                  Uses bootstrap for styling and connects to firebase auth
function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for password reset instructions');
    } catch {
      setError('Failed to reset password');
    }
    setLoading(false);
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h3 className="cardHeader">Reset password</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
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
            <Button
              style={{ marginLeft: '245px' }}
              disabled={loading}
              type="submit"
            >
              Reset password
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="text-white mt-3 w-100 fs-20">
        Already have an account?{' '}
        <Link style={{ color: '#21c6f6' }} to="/login">
          Log in
        </Link>
      </div>
      <div className="text-white w-100 mt-2 fs-20">
        Need an account?{' '}
        <Link style={{ color: '#21c6f6' }} to="/signup">
          Sign up
        </Link>
      </div>
    </>
  );
}

export default ForgotPassword;
