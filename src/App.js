import React, { useState, useCallback } from 'react';
import { Input, Button, Card, Typography, Row, Col, message, Switch, theme } from 'antd';
import { CopyOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';
import { pinyin } from 'pinyin-pro';
import './App.css';

const { TextArea } = Input;
const { Title } = Typography;
const { useToken } = theme;

const App = () => {
  const [chineseText, setChineseText] = useState('');
  const [pinyinResult, setPinyinResult] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { token } = useToken();

  // 转换拼音
  const handleTextChange = useCallback((e) => {
    const text = e.target.value;
    setChineseText(text);
    
    if (!text.trim()) {
      setPinyinResult('');
      return;
    }

    try {
      // 只输出带声调的拼音
      const withTone = pinyin(text, { 
        toneType: 'symbol',
        type: 'array',
        nonZh: 'consecutive' // 保留非汉字字符
      }).join(' ');
      setPinyinResult(withTone);
    } catch (error) {
      console.error('Pinyin conversion error:', error);
      message.error('转换失败，请检查输入');
    }
  }, []);

  // 复制文本
  const handleCopy = useCallback(() => {
    if (!pinyinResult) {
      message.warning('没有可复制的内容');
      return;
    }

    navigator.clipboard.writeText(pinyinResult)
      .then(() => {
        message.success('复制成功！');
      })
      .catch((error) => {
        console.error('Copy error:', error);
        message.error('复制失败，请手动复制');
      });
  }, [pinyinResult]);

  // 切换主题
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
    // 更新body背景色
    document.body.style.backgroundColor = !isDarkMode ? '#141414' : '#f0f2f5';
  }, [isDarkMode]);

  // 获取主题相关样式
  const getThemeStyles = () => ({
    appContainer: {
      backgroundColor: isDarkMode ? '#141414' : '#f0f2f5',
    },
    card: {
      backgroundColor: isDarkMode ? '#1f1f1f' : '#fff',
    },
    title: {
      color: isDarkMode ? token.colorPrimaryText : token.colorPrimary,
    },
    input: {
      backgroundColor: isDarkMode ? '#141414' : '#fff',
      color: isDarkMode ? '#fff' : '#000',
    },
    output: {
      backgroundColor: isDarkMode ? '#141414' : '#fafafa',
      color: isDarkMode ? '#fff' : '#000',
    }
  });

  const themeStyles = getThemeStyles();

  return (
    <div className="app-container" style={themeStyles.appContainer}>
      <Card 
        className="converter-card"
        style={themeStyles.card}
        bodyStyle={themeStyles.card}
      >
        <div className="header">
          <Title level={2} className="card-title" style={themeStyles.title}>
            汉字转拼音工具
          </Title>
          <Switch
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
            checked={isDarkMode}
            onChange={toggleTheme}
            className="theme-switch"
          />
        </div>
        
        <Row gutter={16} className="converter-row">
          <Col span={12}>
            <Card 
              title="中文输入" 
              bordered={false} 
              className="input-card"
              style={themeStyles.card}
              headStyle={themeStyles.card}
              bodyStyle={themeStyles.card}
            >
              <TextArea
                placeholder="请输入汉字..."
                value={chineseText}
                onChange={handleTextChange}
                rows={12}
                className="text-input"
                style={themeStyles.input}
              />
            </Card>
          </Col>
          
          <Col span={12}>
            <Card 
              title="拼音输出" 
              bordered={false}
              extra={
                <Button
                  type="primary"
                  icon={<CopyOutlined />}
                  onClick={handleCopy}
                  disabled={!pinyinResult}
                >
                  复制
                </Button>
              }
              className="output-card"
              style={themeStyles.card}
              headStyle={themeStyles.card}
              bodyStyle={themeStyles.card}
            >
              <TextArea
                value={pinyinResult}
                readOnly
                rows={12}
                className="pinyin-output"
                style={themeStyles.output}
              />
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default App;
