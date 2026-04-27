import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaEnvelope, FaSignOutAlt, FaMapMarkerAlt, FaHistory, FaHeart } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-grid">
          <aside className="profile-sidebar">
            <div className="profile-info-card">
              <div className="profile-avatar-large">
                <img src={user.profilePic} alt="Profile" />
              </div>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <button className="btn-logout" onClick={handleLogout}>
                <FaSignOutAlt /> Keluar
              </button>
            </div>
            
            <nav className="profile-nav">
              <a href="#edit" className="active"><FaUser /> Edit Profil</a>
              <a href="#saved"><FaHeart /> Properti Disimpan</a>
              <a href="#history"><FaHistory /> Riwayat Pencarian</a>
            </nav>
          </aside>
          
          <main className="profile-content">
            <div className="content-card">
              <h2>Pengaturan Profil</h2>
              <form className="profile-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Nama Lengkap</label>
                    <input type="text" defaultValue={user.name} />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" defaultValue={user.email} />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Alamat</label>
                  <textarea placeholder="Masukkan alamat Anda..."></textarea>
                </div>
                
                <div className="form-group">
                  <label>Bio</label>
                  <textarea placeholder="Ceritakan sedikit tentang Anda..."></textarea>
                </div>
                
                <button type="button" className="btn-save">Simpan Perubahan</button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
