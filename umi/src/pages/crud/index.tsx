import { useMemo, useRef, useState } from 'react';
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
  const { readyState, sendMessage, latestMessage, disconnect, connect } = useWebSocket(addr, {
    manual: true,
  });

  const preOutput = useRef([]);
  (preOutput.current as string[]) = useMemo(() => {
    console.log(preOutput.current);
    if (!latestMessage) return preOutput.current;
    return [...preOutput.current, latestMessage.data + '\n'];
  }, [latestMessage]);

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
          <TextArea rows={5} placeholder="some output" value={''.concat(...preOutput.current)} />
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
                preOutput.current = [];
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
