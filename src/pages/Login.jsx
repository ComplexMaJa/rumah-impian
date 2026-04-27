import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaGoogle, FaFacebookF, FaEnvelope, FaLock } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, name: email.split('@')[0] });
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <Link to="/" className="auth-logo">
            <FaHome />
            <span>Rumah Impian</span>
          </Link>
          
          <div className="auth-header">
            <h2>Selamat Datang Kembali</h2>
            <p>Silakan masuk ke akun Anda</p>
          </div>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <div className="input-with-icon">
                <FaEnvelope className="input-icon" />
                <input 
                  type="email" 
                  placeholder="nama@email.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Kata Sandi</label>
              <div className="input-with-icon">
                <FaLock className="input-icon" />
                <input type="password" placeholder="••••••••" required />
              </div>
            </div>
            
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Ingat saya</span>
              </label>
              <a href="#forgot" className="forgot-password">Lupa sandi?</a>
            </div>
            
            <button type="submit" className="btn-auth-submit">MASUK</button>
          </form>
          
          <div className="auth-divider">
            <span>Atau masuk dengan</span>
          </div>
          
          <div className="social-auth">
            <button className="btn-social google">
              <FaGoogle />
            </button>
            <button className="btn-social facebook">
              <FaFacebookF />
            </button>
          </div>
          
          <div className="auth-footer">
            <p>Belum punya akun? <Link to="/register">Daftar sekarang</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
