'use client';

import { Heading, Box, Tabs, Tab, Avatar, Main } from 'grommet';
import { User } from 'grommet-icons';
import { PCNav, PCSideBar } from '@/app/components';
import { ChangeAvatar, ChangeNickname, ChangePassword } from '@/jujiuuicomponents/application/settings/account';


export default function Page() {
  return (
    <Box fill gap='small' background='background-contrast'>
      <PCNav />
      <Box direction='row' flex={{ grow: 1, shrink: 1 }} gap='small'>
        <PCSideBar />
        <Main background='background' pad='medium' flex={{ grow: 1, shrink: 1 }}>
          <Heading level={2}>应用设置</Heading>
          <Tabs>
            <Tab title='账号设置'>
              <Box wrap direction='row' gap='small'>
                <Box border width='medium' gap='small' pad='medium' round='small'>
                  <ChangeAvatar />
                  <Avatar background='background-contrast' alignSelf='center'>
                    <User color='text-xweak' />
                  </Avatar>
                </Box>
                <Box border width='medium' gap='small' pad='medium' round='small'>
                  <ChangeNickname />
                </Box>
                <Box border width='medium' gap='small' pad='medium' round='small'>
                  <Heading level={3} alignSelf='center' margin='none'>修改密码</Heading>
                  <ChangePassword />
                </Box>
              </Box>
            </Tab>
            <Tab title='通知设置'></Tab>
            <Tab title='界面设置'></Tab>
          </Tabs>
        </Main>
      </Box>
    </Box>
  );
}