import { useEffect, useState } from 'react';
import styles from './index.css';
import { useWebSocket } from 'ahooks';
import { Row, Col, Button, Input } from 'antd';

const { TextArea } = Input;

enum ReadyState {
  Connecting = 0,
  Open = 1,
  Closing = 2,
  Closed = 3,
}

export default function WebsocketPage() {
  const [addr, setAddr] = useState('wss://echo.websocket.org');
  const [output, setOutput] = useState<string[]>([]);
  const { readyState, sendMessage, latestMessage, disconnect, connect } = useWebSocket(addr, {
    manual: true,
  });

  // ref 和 state 的主要区别是：
  // 更新 state 会触发组件重新渲染，更新 ref 则不会
  // state 更新是异步的（state 会在重新渲染之后更新），ref 更新是同步的（ref 立即更新）

  // https://www.jianshu.com/p/94ace269414d
  // useMemo 是在渲染过程中进行, 在内部执行setState会死循环
  // useEffect 是在渲染结束后进行

  useEffect(() => {
    console.log('useEffect');
    if (!latestMessage) return;
    setOutput([...output, latestMessage.data + '\n']);
  }, [latestMessage]);

  console.log('render');
  return (
    <Col offset={6} span={12}>
      <div>
        <Row>
          <Input
            defaultValue={'wss://echo.websocket.org'}
            onChange={(e) => setAddr((e.target as HTMLInputElement).value)}
          />
        </Row>

        <Row className={styles.gap}>
          <TextArea rows={5} placeholder="some output" value={''.concat(...output)} />
        </Row>

        <Row className={styles.gap}>
          <Col span={3}>
            <Button
              type="primary"
              block
              onClick={() => sendMessage && sendMessage(`${Date.now()}`)}
              disabled={readyState !== ReadyState.Open}
            >
              Send
            </Button>
          </Col>

          <Col offset={1} span={3}>
            <Button
              type="primary"
              block
              onClick={() => {
                connect && connect();
                console.log('connecting to', addr);
              }}
              disabled={readyState === ReadyState.Open}
            >
              Connect
            </Button>
          </Col>

          <Col offset={1} span={3}>
            <Button
              type="primary"
              block
              onClick={() => disconnect && disconnect()}
              disabled={readyState !== ReadyState.Open}
            >
              Disconnect
            </Button>
          </Col>

          <Col offset={1} span={3}>
            <Button
              type="primary"
              block
              onClick={() => {
                setOutput([]);
              }}
            >
              clear
            </Button>
          </Col>

          <div style={{ marginLeft: 8 }}>readyState: {readyState}</div>
        </Row>
      </div>
    </Col>
  );
}
