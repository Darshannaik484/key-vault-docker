import React, { useState } from 'react';
import { Button, Modal, Form, Input, message } from 'antd';
import { MessageOutlined, SendOutlined } from '@ant-design/icons';
import './Footer.css';

const { TextArea } = Input;

const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Feedback submitted:', values);
      message.success('Thank you for your feedback! We appreciate your input.');
      form.resetFields();
      setIsModalVisible(false);
    } catch (error) {
      message.error('Failed to submit feedback. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <p>© 2024 Key-React. All rights reserved.</p>
            <p>Secure encryption tools for everyone.</p>
          </div>
          <Button 
            type="primary" 
            icon={<MessageOutlined />}
            onClick={showModal}
            className="feedback-btn"
          >
            Give Feedback
          </Button>
        </div>
      </footer>

      <Modal
        title={
          <div className="modal-title">
            <MessageOutlined style={{ marginRight: 8, color: '#667eea' }} />
            Share Your Feedback
          </div>
        }
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={500}
        className="feedback-modal"
      >
        <div className="feedback-content">
          <p className="feedback-description">
            Your valuable feedback will help us in analyzing and improving the user experience.
          </p>
          
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            className="feedback-form"
          >
            <Form.Item
              name="name"
              label="Full Name"
              rules={[
                { required: true, message: 'Please enter your name' },
                { min: 2, message: 'Name must be at least 2 characters' }
              ]}
            >
              <Input 
                placeholder="Enter your full name"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email Address"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email address' }
              ]}
            >
              <Input 
                placeholder="Enter your email address"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="feedback"
              label="Your Feedback"
              rules={[
                { required: true, message: 'Please share your feedback' },
                { min: 10, message: 'Feedback must be at least 10 characters' }
              ]}
            >
              <TextArea
                rows={4}
                placeholder="Tell us about your experience, suggestions, or any issues you encountered..."
                showCount
                maxLength={500}
              />
            </Form.Item>

            <Form.Item className="submit-section">
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                icon={<SendOutlined />}
                size="large"
                block
                className="submit-btn"
              >
                {loading ? 'Submitting...' : 'Submit Feedback'}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default Footer;
