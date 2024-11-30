// hooks/useWebSocket.ts
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useCallback, useState } from 'react';

interface UseWebSocketProps {
  customerId?: string;
  role: 'customer' | 'consultant';
}

export const useWebSocket = ({}: UseWebSocketProps) => {
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [connected, setConnected] = useState(false);

  // 웹소켓 연결 함수
  const connectWebSocket = useCallback(() => {
    if (stompClient) {
      stompClient.deactivate();
      setConnected(false);
    }

    const client = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/ws'),
      onConnect: () => {
        setConnected(true);
        console.log('웹소켓 연결 성공!');
      },
      onDisconnect: () => {
        setConnected(false);
        console.log('웹소켓 연결 실패..');
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    client.activate();
    setStompClient(client);
  }, [stompClient]);

  // 웹소켓 연결 해제 함수
  const disconnectWebSocket = useCallback(() => {
    if (stompClient) {
      stompClient.deactivate();
      setStompClient(null);
      setConnected(false);
    }
  }, [stompClient]);

  return { stompClient, connected, connectWebSocket, disconnectWebSocket };
};
