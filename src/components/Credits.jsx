import React from 'react';
import { Card, Typography, Space, Button } from 'antd';
import { GithubOutlined, LinkOutlined, CodeOutlined } from '@ant-design/icons';
import './Credits.css';

const { Title, Paragraph, Text } = Typography;

const Credits = () => {
  return (
    <div className="credits-container">
      <Card className="credits-card">
        <div className="credits-header">
          
          <Title level={4} className="credits-title">
            
          </Title>
        </div>
        
        <Paragraph className="credits-description">
          This application uses the <Text code>project-key-vault</Text> library for all encryption and decryption operations. 
          A lightweight and modular JavaScript library that provides popular encryption algorithms.
        </Paragraph>

        <div className="credits-links">
          <Space size="large" wrap>
            <Button
              type="primary"
              icon={<LinkOutlined />}
              href="https://www.npmjs.com/package/project-key-vault"
              target="_blank"
              rel="noopener noreferrer"
              className="credits-btn npm-btn"
            >
              NPM Package
            </Button>
            
            <Button
              icon={<GithubOutlined />}
              href="https://github.com/Darshannaik484/key-vault"
              target="_blank"
              rel="noopener noreferrer"
              className="credits-btn github-btn"
            >
              GitHub Repository
            </Button>
          </Space>
        </div>

        <div className="credits-features">
          <Text strong className="features-title">Library Features:</Text>
          <ul className="features-list">
            <li>AES (Advanced Encryption Standard)</li>
            <li>RSA (Rivest–Shamir–Adleman)</li>
            <li>Caesar Cipher</li>
            <li>Triple DES</li>
            <li>XOR Encryption</li>
            <li>SHA-256 Hashing</li>
          </ul>
        </div>

        <div className="credits-footer">
          <Text className="credits-note">
            Built and maintained for secure web applications and educational purposes.
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default Credits;
