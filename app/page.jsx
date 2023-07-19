'use client';

import { Text, Box, Nav, Menu, Select, Sidebar, Accordion, AccordionPanel, List, CheckBox, Button } from 'grommet';
import { CloudComputer, User, Qr, Logout, SettingsOption, Video, Webcam } from 'grommet-icons';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const data0 = [
  { label: '客厅' }, 
  { label: '走廊' }, 
  { label: '厨房', disabled: true }];
const data1 = [
  { label: '192.168.100.10' }, 
  { label: '192.168.100.11' }, 
  { label: '192.168.100.12' }];
const data2 = [
  { label: '192.168.200.10' }, 
  { label: '192.168.200.11' }, 
  { label: '192.168.200.12' }];

export function CameraCheckBox({ disabled, isNew, checked, label }) {
  return (
    <CheckBox disabled={disabled} checked={checked} label={<Button plain label={label} icon={isNew ? <Webcam /> : <Video />} />} />
  );
}

function CameraList({ isNew, data, onClickCameraSetting }) {
  return (
    <List data={data} border={false} itemKey='label' action={(item) => <Button disabled={item.disabled} key={item.label} plain tip='设置' icon={<SettingsOption />} onClick={() => onClickCameraSetting(item.label)} />}>
      {datum => <CameraCheckBox disabled={datum.disabled} isNew={isNew} label={datum.label} key={datum.label} />}
    </List>
  );
}

export default function Page() {
  return (
    <Box fill>
      <Nav direction='row' background='background-front' pad='small' justify='between'>
        <Box direction='row' align='center' gap='small'>
          <CloudComputer size='large' />
          <Text size='large'>雎鸠云视觉SaaS平台</Text>
        </Box>
        <Select options={['简体中文', 'English']} value='简体中文' />
        <Menu label={<User />} items={[
          {label: '添加设备', icon: <Qr />, gap: 'small', onClick: () => setShowQRCode(!showQRCode)},
          {label: '退出登录', icon: <Logout />, gap: 'small'},
        ]} />
      </Nav>
      <Box direction='row' flex={{ grow: 1, shrink: 1 }} background='background-contrast'>
        <Sidebar flex={false} width='medium'>
          <Accordion>
            <AccordionPanel label='IPC Proxy 1'>
              <CameraList data={data1} onClickCameraSetting={() => {}} />
            </AccordionPanel>
            <AccordionPanel label='IPC Proxy 2'>
              <CameraList data={data2} onClickCameraSetting={() => {}} />
            </AccordionPanel>
            <CameraList isNew data={data0} onClickCameraSetting={() => {}} />
          </Accordion>
        </Sidebar>
      </Box>
    </Box>
  );
}