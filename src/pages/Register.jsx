import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaGoogle, FaFacebookF, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
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
            <h2>Buat Akun Baru</h2>
            <p>Bergabunglah dengan komunitas kami</p>
          </div>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nama Lengkap</label>
              <div className="input-with-icon">
                <FaUser className="input-icon" />
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <div className="input-with-icon">
                <FaEnvelope className="input-icon" />
                <input 
                  type="email" 
                  placeholder="nama@email.com" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
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
            
            <div className="form-group">
              <label>Konfirmasi Kata Sandi</label>
              <div className="input-with-icon">
                <FaLock className="input-icon" />
                <input type="password" placeholder="••••••••" required />
              </div>
            </div>
            
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" required />
                <span>Saya setuju dengan Syarat & Ketentuan</span>
              </label>
            </div>
            
            <button type="submit" className="btn-auth-submit">DAFTAR</button>
          </form>
          
          <div className="auth-divider">
            <span>Atau daftar dengan</span>
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
            <p>Sudah punya akun? <Link to="/login">Masuk di sini</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
