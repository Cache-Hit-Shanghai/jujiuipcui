'use client';

import { Text, Box, Sidebar, Accordion, AccordionPanel, Main, Grid, Video, Stack, Heading, Layer, Button, TextInput, List } from 'grommet';
import { FormEdit, FormTrash } from 'grommet-icons';
import { useRef, useState } from 'react';
import {
  IpcCardSelectable,
	ScreenCopyControl,
	ChatControl,
	MuteControl,
	RecordControl,
	PanLayer,
	ResolutionControl,
	ZoomControl,
} from '@/jujiuuicomponents/Components';
import { JuJiuTagFromShared, JuJiuTagSharing } from '@/jujiuuicomponents/JuJiuTags';
import { PCNav, PCSideBar } from '@/app/components';
import { WiFiBinding, DeviceBinding } from '@/jujiuuicomponents/application/device/binding';


function CameraList() {
  return (
    <Accordion>
      <AccordionPanel label={<Text margin='small'>默认分组</Text>}>
        <Box gap='medium' margin='small'>
          <IpcCardSelectable label={<Box direction='row' align='center' gap='small'><Text>客厅</Text><JuJiuTagFromShared /><JuJiuTagSharing /></Box>} imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.f54c83f04442cec528a250d251251ce6?rik=JE7BoZk5xK4iEg&riu=http%3a%2f%2fpic4.bbzhi.com%2ffengjingbizhi%2fgaoqingxifengjingzhuomianbizhixiazai%2fgaoqingxifengjingzhuomianbizhixiazai_366146_18.jpg&ehk=YvUnl11nBp%2fGJssQUbYqkXLo7fchkD%2fEQ8BGpW2Urjs%3d&risl=&pid=ImgRaw&r=0' />
        </Box>
      </AccordionPanel>
      <AccordionPanel label={<Text margin='small'>办公室</Text>}>
        <Box gap='medium' margin='small'>
          <IpcCardSelectable key={1} label='办3' imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.4894a961ab87e3459babae4ef8a2f4fa?rik=1P7ZI7Evnz4Pqg&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0830%2fxiaguang2.jpg&ehk=Ok%2fjrv35R0L218oT%2flliRL8DJc52pARVnWU%2bXOpUwq4%3d&risl=&pid=ImgRaw&r=0' />
          <IpcCardSelectable key={2} label='办5' imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.f54c83f04442cec528a250d251251ce6?rik=JE7BoZk5xK4iEg&riu=http%3a%2f%2fpic4.bbzhi.com%2ffengjingbizhi%2fgaoqingxifengjingzhuomianbizhixiazai%2fgaoqingxifengjingzhuomianbizhixiazai_366146_18.jpg&ehk=YvUnl11nBp%2fGJssQUbYqkXLo7fchkD%2fEQ8BGpW2Urjs%3d&risl=&pid=ImgRaw&r=0' />
          <IpcCardSelectable key={3} label='办7' imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.3edbd350d03c25ed988236c50d0733e6?rik=txi3%2f%2b%2fVYUJofg&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2013%2f0802%2fwmdqfj4.jpg&ehk=TY9%2f90VQn6m3NYCoiPX2UyRYQIT7dkGJtTJli1W7pfo%3d&risl=&pid=ImgRaw&r=0' />
          <IpcCardSelectable key={4} label='办9' imgurl='https://ts1.cn.mm.bing.net/th/id/R-C.0c8bf36e099654aadaf5f127ef1a3f1b?rik=uHrB%2blGez03%2fAA&riu=http%3a%2f%2fi3.img.969g.com%2fdown%2fimgx2014%2f10%2f24%2f289_102445_a1cff.jpg&ehk=EeF%2fioqRM6NfQqkCgXw%2bwLvO1%2fxZgeZ2pof7ALNLGsg%3d&risl=&pid=ImgRaw&r=0' />
        </Box>
      </AccordionPanel>
    </Accordion>
  );
}

export function VideoPlayer({ ...prop }) {
  const ref = useRef();
  return (
    <Box fill background='black' {...prop} ref={ref}>
      <Stack fill interactiveChild='last'>
        <Video controls={false} />
        <Stack fill>
          <Box fill justify='between'>
            <Box pad='small' direction='row' justify='center'>
              <Text>云探1</Text>
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
  const [ openAddDevice, setOpenAddDevice ] = useState(false);
  const [ openDeviceGroup, setOpenDeviceGroup ] = useState(false);
  const [ stage, setStage ] = useState(0);
  return (
    <Box fill gap='small' background='background-contrast'>
      <PCNav onAddDevice={() => setOpenAddDevice(true)} onDeviceGroup={() => setOpenDeviceGroup(true)} />
      <Box direction='row' flex={{ grow: 1, shrink: 1 }} gap='small'>
        <PCSideBar />
        <Sidebar flex={false} width='medium' overflow='auto' pad='none' background='background'>
          <CameraList />
        </Sidebar>
        <Main>
          <Grid fill columns='640px' align='center' justify='center' style={{ gridAutoFlow: 'row dense', gridAutoRows: '480px', gap: '12px' }}>
            {Array.from({ length: 20 }, (_, index) => index).map(item => <VideoPlayer key={item} />)}
          </Grid>
        </Main>
      </Box>
      { openAddDevice && (
        <Layer onClickOutside={() => setOpenAddDevice(false)} position='top'>
          {stage === 0 && (
            <Box border width='medium' pad='small' gap='medium'>
              <Heading level={3} alignSelf='center' margin='none'>添加设备</Heading>
              <WiFiBinding />
              <Box direction='row' justify='end'>
                <Button label='下一步' onClick={() => setStage(1)} />
              </Box>
            </Box>
          )}
          {stage === 1 && (
            <Box border width='medium' pad='small' gap='medium'>
              <Heading level={3} alignSelf='center' margin='none'>添加设备</Heading>
              <DeviceBinding />
              <Box direction='row'>
                <Button label='上一步' onClick={() => setStage(0)} />
              </Box>
            </Box>
          )}
        </Layer>
      ) }
      { openDeviceGroup && (
        <Layer onClickOutside={() => setOpenDeviceGroup(false)} position='top'>
          <Box border width='medium' pad='small' gap='medium'>
            <Heading level={3} alignSelf='center' margin='none'>设备分组</Heading>
            <Box direction='row' gap='small' align='center'>
              <TextInput placeholder='请输入分组名……' />
              <Button label='添加分组' />
            </Box>
            <Box>
              <List data={[{ name: '默认分组', disabled: true }, { name: '办公室', disabled: false }]}>
                { (datum) => (
                  <Box direction='row' align='center' justify='between'>
                    <Text color={datum.disabled ? 'status-disabled': 'undefined'}>{datum.name}</Text>
                    <Box direction='row'>
                      <Button disabled={datum.disabled} icon={<FormEdit />} />
                      <Button disabled={datum.disabled} icon={<FormTrash />} />
                    </Box>
                  </Box>
                ) }
              </List>
            </Box>
          </Box>
        </Layer>
      ) }
    </Box>
  );
}