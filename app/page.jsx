'use client';

import { Text, Box, Nav, Menu, Select, Sidebar, List, CheckBox, Button, Main, Grid, Video, Stack } from 'grommet';
import { CloudComputer, User, Add, Logout, SettingsOption, Webcam, Expand, Camera, ZoomIn, VolumeMute, Microphone, Close, Shift } from 'grommet-icons';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useRef } from 'react';
import {
	ScreenCopyControl,
	ChatControl,
	MuteControl,
	RecordControl,
	PanLayer,
	ResolutionControl,
	ZoomControl,
} from '../components/Components';

const data0 = [
  { label: '客厅' }, 
  { label: '走廊' }, 
  { label: '厨房', disabled: true }];

export function CameraCheckBox({ disabled,  checked, label }) {
  return (
    <CheckBox disabled={disabled} checked={checked} label={<Button plain label={label} icon={<Webcam />} />} />
  );
}

function CameraList({ isNew, data, onClickCameraSetting }) {
  return (
    <List data={data} border={false} itemKey='label' action={(item) => <Button disabled={item.disabled} key={item.label} plain tip='设置' icon={<SettingsOption />} onClick={() => onClickCameraSetting(item.label)} />}>
      {datum => <CameraCheckBox disabled={datum.disabled} isNew={isNew} label={datum.label} key={datum.label} />}
    </List>
  );
}

function IconButton({ content, icon, ...prop }) {
  return <Button plain tip={content} icon={icon} {...prop} />;
}

const BigViewPort = { gridColumn: 'span 2', gridRow: 'span 2' };

export function VideoPlayer({ ...prop }) {
  const ref = useRef();
  return (
    <Box fill background='background' {...prop} ref={ref}>
      <Stack fill interactiveChild='last'>
        <Video controls={false} />
        <Stack fill>
          <Box fill justify='between'>
            <Box pad='small' direction='row' justify='end'>
              <IconButton key={5} content='关闭' icon={<Close />} />
            </Box>
            <Box direction='row' justify='center' gap='small'>
              <ScreenCopyControl showTitle={false} />
              <RecordControl showTitle={false} />
              <ChatControl showTitle={false} />
              <MuteControl showTitle={false} />
              <PanLayer target={ref} />
              <ResolutionControl showTitle={false} />
              <ZoomControl showTitle={false} />
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' background='background-contrast' pad='small' justify='between'>
        <Box direction='row' align='center' gap='small'>
          <CloudComputer size='large' />
          <Text size='xlarge' weight='bold'>雎鸠云视觉SaaS平台</Text>
        </Box>
        <Select options={['简体中文', 'English']} value='简体中文' />
        <Menu label={<User />} items={[
          {label: '账号设置', icon: <Add />, gap: 'small', onClick: () => setShowQRCode(!showQRCode)},
          {label: '退出登录', icon: <Logout />, gap: 'small'},
        ]} />
      </Nav>
      <Box direction='row' flex={{ grow: 1, shrink: 1 }}>
        <Sidebar flex={false} width='medium'>
          <CameraList isNew data={data0} onClickCameraSetting={() => {}} />
        </Sidebar>
        <Main pad='small' background='background-front'>
          <Grid fill columns='640px' gap='small' align='center' justify='center' style={{ gridAutoFlow: 'row dense', gridAutoRows: '480px' }}>
            {Array.from({ length: 20 }, (_, index) => index).map(item => <VideoPlayer key={item} />)}
          </Grid>
        </Main>
      </Box>
    </Box>
  );
}