import React, { useState } from 'react';
import { Card, Collapse, Typography, Divider, Tag, Space, Row, Col } from 'antd';
import { 
  InfoCircleOutlined, 
  LockOutlined, 
  SafetyOutlined, 
  KeyOutlined,
  BulbOutlined
} from '@ant-design/icons';
import './AlgorithmDetails.css';

const { Panel } = Collapse;
const { Title, Paragraph, Text } = Typography;

const AlgorithmDetails = () => {
  const [activeKey, setActiveKey] = useState(['1']);

  const algorithms = [
    {
      key: '1',
      name: 'Caesar Cipher',
      icon: <KeyOutlined />,
      color: '#52c41a',
      description: 'One of the simplest and most widely known encryption techniques',
      details: {
        type: 'Substitution Cipher',
        security: 'Low',
        keySize: '1-25 (shift value)',
        speed: 'Very Fast',
        useCase: 'Educational purposes, simple obfuscation'
      },
      logic: `Simple substitution cipher that shifts each letter by a fixed number of positions.

**Process:**
1. Choose shift value (1-25)
2. Shift each letter by that amount
3. Wrap around alphabet if needed

**Example:** "HELLO" with shift 3 → "KHOOR"`,
      pros: ['Simple to understand and implement', 'Very fast encryption/decryption', 'No complex key management'],
      cons: ['Extremely vulnerable to frequency analysis', 'Only 25 possible keys', 'Not suitable for secure communication']
    },
    {
      key: '2',
      name: 'AES-256',
      icon: <SafetyOutlined />,
      color: '#1890ff',
      description: 'Advanced Encryption Standard with 256-bit key length',
      details: {
        type: 'Symmetric Block Cipher',
        security: 'Very High',
        keySize: '256 bits',
        speed: 'Fast',
        useCase: 'Government, military, banking, secure communications'
      },
      logic: `Advanced symmetric encryption standard using 256-bit keys.

**Process:**
1. Key expansion generates round keys
2. 14 rounds of substitution and permutation
3. Each round: SubBytes → ShiftRows → MixColumns → AddRoundKey

**Security:** Industry standard, used by governments worldwide.`,
      pros: ['Extremely secure', 'Fast hardware/software implementation', 'Widely adopted standard', 'No known practical attacks'],
      cons: ['Requires secure key distribution', 'Symmetric key management complexity', 'Not quantum-resistant']
    },
    {
      key: '3',
      name: 'RSA',
      icon: <LockOutlined />,
      color: '#722ed1',
      description: 'Asymmetric public-key cryptography algorithm',
      details: {
        type: 'Asymmetric Cipher',
        security: 'High',
        keySize: '2048+ bits',
        speed: 'Slow',
        useCase: 'Digital signatures, key exchange, secure communications'
      },
      logic: `Asymmetric encryption using public and private key pairs.

**Process:**
1. Generate two large prime numbers (p, q)
2. Calculate n = p × q and φ(n) = (p-1)(q-1)
3. Choose public key e, calculate private key d
4. Encrypt: c = m^e mod n
5. Decrypt: m = c^d mod n

**Security:** Based on difficulty of factoring large numbers.`,
      pros: ['Asymmetric key system', 'Digital signature capability', 'Widely used for key exchange', 'Mathematically proven security'],
      cons: ['Slow for large data', 'Requires large key sizes', 'Vulnerable to quantum attacks', 'Complex key management']
    },
    {
      key: '4',
      name: 'XOR Cipher',
      icon: <KeyOutlined />,
      color: '#fa8c16',
      description: 'Simple bitwise XOR operation with a key',
      details: {
        type: 'Stream Cipher',
        security: 'Low-Medium',
        keySize: 'Variable',
        speed: 'Very Fast',
        useCase: 'Simple obfuscation, basic encryption'
      },
      logic: `Simple bitwise XOR operation between plaintext and key.

**Process:**
1. Convert text and key to binary
2. Perform XOR operation bit by bit
3. Convert result back to text

**Example:** "HELLO" XOR "KEY" = encrypted result

**Property:** Self-inverse - (A XOR B) XOR B = A`,
      pros: ['Very simple to implement', 'Extremely fast', 'Symmetric operation', 'No complex mathematics'],
      cons: ['Vulnerable to frequency analysis', 'Key reuse is dangerous', 'Not cryptographically secure', 'Easy to break with known plaintext']
    },
    {
      key: '5',
      name: 'Triple DES',
      icon: <SafetyOutlined />,
      color: '#eb2f96',
      description: 'Triple Data Encryption Standard with three keys',
      details: {
        type: 'Symmetric Block Cipher',
        security: 'Medium',
        keySize: '168 bits (3 × 56 bits)',
        speed: 'Medium',
        useCase: 'Legacy systems, backward compatibility'
      },
      logic: `Triple application of DES encryption with three different keys.

**Process:**
1. Encrypt with Key1
2. Decrypt with Key2  
3. Encrypt with Key3

**Formula:** C = E(K3, D(K2, E(K1, P)))

**Security:** More secure than single DES, but being phased out for AES.`,
      pros: ['More secure than DES', 'Backward compatible', 'Widely supported', 'Proven track record'],
      cons: ['Slower than AES', 'Being deprecated', 'Vulnerable to some attacks', 'Complex key management']
    }
  ];

  const onChange = (key) => {
    setActiveKey(key);
  };

  return (
    <div className="algorithm-details-container">
      <Card className="algorithm-details-card">
        <div className="section-header">
          <Title level={2} className="section-title">
            <InfoCircleOutlined className="title-icon" />
            Encryption Algorithms Explained
          </Title>
          <Paragraph className="section-description">
            Learn about the encryption algorithms used in this tool, their security levels, 
            implementation details, and practical applications.
          </Paragraph>
        </div>

        <Collapse
          activeKey={activeKey}
          onChange={onChange}
          expandIconPosition="right"
          className="algorithm-collapse"
        >
          {algorithms.map((algorithm) => (
            <Panel
              key={algorithm.key}
              header={
                <div className="algorithm-header">
                  <Space>
                    <span className="algorithm-icon" style={{ color: algorithm.color }}>
                      {algorithm.icon}
                    </span>
                    <Title level={4} className="algorithm-name">
                      {algorithm.name}
                    </Title>
                    <Tag color={algorithm.color} className="algorithm-tag">
                      {algorithm.details.type}
                    </Tag>
                  </Space>
                  <Text className="algorithm-description">{algorithm.description}</Text>
                </div>
              }
              className="algorithm-panel"
            >
              <div className="algorithm-content">
                <Row gutter={[24, 24]}>
                  <Col xs={24} lg={12}>
                    <Card size="small" className="details-card">
                      <Title level={5}>
                        <BulbOutlined className="card-icon" />
                        Algorithm Details
                      </Title>
                      <div className="details-grid">
                        <div className="detail-item">
                          <Text strong>Security Level:</Text>
                          <Tag color={algorithm.details.security === 'Very High' ? 'red' : 
                                     algorithm.details.security === 'High' ? 'orange' : 
                                     algorithm.details.security === 'Medium' ? 'blue' : 'green'}>
                            {algorithm.details.security}
                          </Tag>
                        </div>
                        <div className="detail-item">
                          <Text strong>Key Size:</Text>
                          <Text code>{algorithm.details.keySize}</Text>
                        </div>
                        <div className="detail-item">
                          <Text strong>Speed:</Text>
                          <Text code>{algorithm.details.speed}</Text>
                        </div>
                        <div className="detail-item">
                          <Text strong>Use Cases:</Text>
                          <Text>{algorithm.details.useCase}</Text>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  
                  <Col xs={24} lg={12}>
                    <Card size="small" className="pros-cons-card">
                      <Title level={5}>
                        <InfoCircleOutlined className="card-icon" />
                        Pros & Cons
                      </Title>
                      <div className="pros-cons">
                        <div className="pros">
                          <Text strong className="pros-title">Advantages:</Text>
                          <ul>
                            {algorithm.pros.map((pro, index) => (
                              <li key={index}><Text>{pro}</Text></li>
                            ))}
                          </ul>
                        </div>
                        <div className="cons">
                          <Text strong className="cons-title">Limitations:</Text>
                          <ul>
                            {algorithm.cons.map((con, index) => (
                              <li key={index}><Text>{con}</Text></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>

                <Divider />

                <Card size="small" className="logic-card">
                  <Title level={5}>
                    <KeyOutlined className="card-icon" />
                    How It Works
                  </Title>
                  <div className="logic-content">
                    <pre className="logic-text">{algorithm.logic}</pre>
                  </div>
                </Card>
              </div>
            </Panel>
          ))}
        </Collapse>
      </Card>
    </div>
  );
};

export default AlgorithmDetails;
