import { getUser } from '../src/app';

describe('getUser', () => {
  test('ユーザ情報の取得が正常に行えること', () => {
    const user = getUser(3);
    expect(user).toBeDefined();
    expect(user?.name).toEqual('saburo');
  });
});
