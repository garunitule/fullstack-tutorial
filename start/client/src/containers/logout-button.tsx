import React from 'react';
import styled from 'react-emotion';
import { useApolloClient } from '@apollo/client';

import { menuItemClassName } from '../components/menu-item';
import { isLoggedInVar } from '../cache';
import { ReactComponent as ExitIcon } from '../assets/icons/exit.svg';

const LogoutButton = () => {
  const client = useApolloClient();
  return (
    <StyledButton
      data-testid="logout-button"
      onClick={() => {
        client.cache.evict({ fieldName: 'me' });// 手動でオブジェクトを削除する
        client.cache.gc();// 参照されていないオブジェクトを削除する. evictしたら他のオブジェクトも参照できなくなる可能性があるので、排除
        localStorage.removeItem('token');
        localStorage.removeItem('userItem');
        isLoggedInVar(false);
      }}
    >
      <ExitIcon />
      Logout
    </StyledButton>
  );
}

export default LogoutButton;

const StyledButton = styled('button')(menuItemClassName, {
  background: 'none',
  border: 'none',
  padding: 0,
});
