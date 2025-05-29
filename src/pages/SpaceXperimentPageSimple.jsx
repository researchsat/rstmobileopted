import React from 'react';
import { Helmet } from 'react-helmet-async';

const SpaceXperimentPageSimple = () => {
  return (
    <>
      <Helmet>
        <title>SpaceXperiment - Book Your Space Research | ResearchSat</title>
      </Helmet>

      <div style={{ 
        backgroundColor: '#001718', 
        minHeight: '100vh', 
        padding: '120px 20px 60px 20px',
        color: '#fffef6',
        fontFamily: 'Poppins, sans-serif'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '48px', 
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #bcd8d5 0%, #107e7d 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            SpaceXperiment
          </h1>
          <p style={{ fontSize: '24px', color: '#bcd8d5', marginBottom: '48px' }}>
            Design Your Custom Space Research Mission
          </p>
          
          <div style={{
            background: 'linear-gradient(135deg, #17242d 0%, #121212 100%)',
            border: '1px solid rgba(188, 216, 213, 0.1)',
            borderRadius: '24px',
            padding: '48px',
            textAlign: 'left'
          }}>
            <h2 style={{ color: '#bcd8d5', marginBottom: '24px' }}>
              🚀 Welcome to SpaceXperiment
            </h2>
            <p style={{ lineHeight: '1.6', marginBottom: '24px' }}>
              This is a simplified version of the SpaceXperiment page to test functionality.
              The full multi-step form with AI proposal generation is being debugged.
            </p>
            
            <div style={{ 
              background: 'rgba(16, 126, 125, 0.1)',
              border: '1px solid rgba(188, 216, 213, 0.2)',
              borderRadius: '12px',
              padding: '24px',
              marginTop: '32px'
            }}>
              <h3 style={{ color: '#107e7d', marginBottom: '16px' }}>
                Available Experiments:
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px' }}>🧬 Protein Crystallization</li>
                <li style={{ marginBottom: '12px' }}>🔬 Cell Culture Studies</li>
                <li style={{ marginBottom: '12px' }}>⚛️ Material Science</li>
                <li style={{ marginBottom: '12px' }}>🌱 Plant Biology</li>
                <li style={{ marginBottom: '12px' }}>💧 Fluid Physics</li>
                <li style={{ marginBottom: '12px' }}>🔥 Combustion Research</li>
              </ul>
            </div>

            <div style={{ 
              background: 'rgba(16, 126, 125, 0.1)',
              border: '1px solid rgba(188, 216, 213, 0.2)',
              borderRadius: '12px',
              padding: '24px',
              marginTop: '24px'
            }}>
              <h3 style={{ color: '#107e7d', marginBottom: '16px' }}>
                Mission Platforms:
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px' }}>🚀 Sub-orbital Flight</li>
                <li style={{ marginBottom: '12px' }}>🛰️ Low Earth Orbit</li>
                <li style={{ marginBottom: '12px' }}>🏗️ International Space Station</li>
              </ul>
            </div>

            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <button style={{
                background: '#107e7d',
                color: '#fffef6',
                border: '2px solid #107e7d',
                borderRadius: '8px',
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Start Your Space Mission
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpaceXperimentPageSimple;
