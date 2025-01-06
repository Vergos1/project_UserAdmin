import React, { useState } from 'react'
import s from '../../components/reports-section/reports-section.module.scss'
import {
  Title,
  Box,
  Flex,
  Select,
  Button,
  rem,
  Text,
  SimpleGrid,
  Card,
  Group,
  Badge,
  NumberFormatter
} from '@mantine/core'
import { IconChevronDown, IconCalendar, IconComponents, IconSettings, IconInfoCircle } from '@tabler/icons-react'
import { DatePickerInput } from '@mantine/dates'
import { LineChart } from '@mantine/charts'

const ReportSection: React.FC = () => {
  const [isOpenFirstSelect, setIsOpenFirstSelect] = useState(false)
  const [isOpenSecondSelect, setIsOpenSecondSelect] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState<[Date | null, Date | null]>([new Date(2020, 7, 1), new Date(2021, 6, 7)])
  const grossVolumeData = [
    { name: 'Avg 2020', uv: 4000, pv: 2400 },
    { name: 'Oct 2020', uv: 3000, pv: 1398 },
    { name: 'Dec 2020', uv: 2000, pv: 9800 },
    { name: 'Jan 2021', uv: 2780, pv: 3908 },
    { name: 'Mar 2021', uv: 1890, pv: 4800 },
    { name: 'May 2021', uv: 2390, pv: 3800 },
    { name: 'Jul 2021', uv: 3490, pv: 4300 }
  ]
  const connectGrossVolumeData = [
    { name: 'Jan', uv: 2400, pv: 3000 },
    { name: 'Feb', uv: 3200, pv: 3200 },
    { name: 'Mar', uv: 2800, pv: 4200 },
    { name: 'Apr', uv: 3100, pv: 3100 },
    { name: 'May', uv: 4000, pv: 2000 },
    { name: 'Jun', uv: 3600, pv: 2700 },
    { name: 'Jul', uv: 4400, pv: 3100 }
  ]
  const netVolumeFromWSalesData = [
    { name: 'Jan', uv: 3000, pv: 1400 },
    { name: 'Feb', uv: 2200, pv: 2400 },
    { name: 'Mar', uv: 1800, pv: 1200 },
    { name: 'Apr', uv: 2800, pv: 2200 },
    { name: 'May', uv: 2700, pv: 3300 },
    { name: 'Jun', uv: 3300, pv: 2100 },
    { name: 'Jul', uv: 4500, pv: 3500 }
  ]
  const newCustomersData = [
    { name: 'Aug 2020', uv: 10, pv: 8 },
    { name: 'Sep 2020', uv: 15, pv: 12 },
    { name: 'Oct 2020', uv: 18, pv: 16 },
    { name: 'Nov 2020', uv: 22, pv: 20 },
    { name: 'Dec 2020', uv: 23, pv: 21 },
    { name: 'Jan 2021', uv: 20, pv: 18 },
    { name: 'Jul 2021', uv: 23, pv: 22 }
  ]

  const newConnectedAccountsData = [
    { name: 'Aug 2020', uv: 30, pv: 28 },
    { name: 'Sep 2020', uv: 35, pv: 33 },
    { name: 'Oct 2020', uv: 38, pv: 35 },
    { name: 'Nov 2020', uv: 40, pv: 38 },
    { name: 'Dec 2020', uv: 39, pv: 37 },
    { name: 'Jan 2021', uv: 40, pv: 39 },
    { name: 'Jul 2021', uv: 41, pv: 40 }
  ]

  const successfulPaymentsData = [
    { name: 'Aug 2020', uv: 50 },
    { name: 'Sep 2020', uv: 100 },
    { name: 'Oct 2020', uv: 130 },
    { name: 'Nov 2020', uv: 100 },
    { name: 'Dec 2020', uv: 50 },
    { name: 'Jan 2021', uv: 110 },
    { name: 'Jul 2021', uv: 100 }
  ]

  const icon = <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />

  const iconSecond = <IconComponents style={{ width: rem(16), height: rem(16) }} />
  return (
    <Box pt={50}>
      <Title pl={16} pb={16}>
        Reports overview
      </Title>
      <Flex pl={16} justify='space-between' pb={16} style={{ borderBottom: '1px solid #d1d1d1' }}>
        <Flex gap={12}>
          <Button.Group
            style={{
              overflow: 'hidden',
              borderRadius: rem(6),
              border: '1px solid #ccc',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              height: '29px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Select
              size='xs'
              styles={{
                input: { border: 'none', borderRadius: 0, height: rem(36) }
              }}
              defaultValue='Last 12 months'
              data={['Last 12 months', 'Last 6 months', 'Last 3 months', 'Last month']}
              rightSection={<IconChevronDown className={isOpenFirstSelect ? s.selectOpen : s.selectClose} />}
              onDropdownOpen={() => setIsOpenFirstSelect(true)}
              onDropdownClose={() => setIsOpenFirstSelect(false)}
            />
            <Box
              style={{
                width: '1px',
                backgroundColor: '#ccc',
                height: rem(36),
                alignSelf: 'center'
              }}
            />
            <DatePickerInput
              size='xs'
              styles={{
                input: { border: 'none', borderRadius: 0, height: rem(36) }
              }}
              type='range'
              value={value}
              onChange={setValue}
              placeholder='1 Aug 2020 - 7 Jul 2021'
              leftSection={icon}
            />
          </Button.Group>
          <Text>compared to</Text>
          <Box
            style={{
              overflow: 'hidden',
              borderRadius: rem(6),
              border: '1px solid #ccc',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              height: '29px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '146px'
            }}
          >
            <Select
              size='xs'
              styles={{
                input: { border: 'none', borderRadius: 0, height: rem(36) }
              }}
              defaultValue='Last year'
              data={['Last year', 'Last 6 months', 'Last 3 months', 'Last month']}
              rightSection={<IconChevronDown className={isOpenSecondSelect ? s.selectOpen : s.selectClose} />}
              onDropdownOpen={() => setIsOpenSecondSelect(true)}
              onDropdownClose={() => setIsOpenSecondSelect(false)}
            />
          </Box>
        </Flex>
        <Flex gap={12}>
          <Box
            style={{
              overflow: 'hidden',
              borderRadius: rem(6),
              border: '1px solid #ccc',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              width: '90px',
              height: '29px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Select
              size='xs'
              styles={{
                input: { border: 'none', borderRadius: 0, height: rem(36) }
              }}
              defaultValue='Monthly'
              data={['Monthly', 'Yearly', 'Days']}
              rightSection={iconSecond}
            />
          </Box>

          <Button
            leftSection={<IconSettings size={18} />}
            variant={isEditing ? 'filled' : 'outline'}
            color={isEditing ? 'blue' : 'black'}
            fw={400}
            onClick={() => setIsEditing(!isEditing)}
            style={{
              fontSize: '14px',
              overflow: 'hidden',
              borderRadius: rem(6),
              border: '1px solid #ccc',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              width: '114px',
              height: '29px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {isEditing ? 'Stop editing' : 'Edit charts'}
          </Button>
        </Flex>
      </Flex>
      <Flex w='100%' justify='center'>
        <SimpleGrid w='100%' cols={3} spacing={0} verticalSpacing={0}>
          <div style={{ borderRight: '1px solid #d1d1d1' }}>
            <Card>
              <Card.Section inheritPadding py='md'>
                <Group align='center' gap={0} justify='space-between'>
                  <Flex align='center' gap={8}>
                    <Text size='md' c='#424242' fw={400}>
                      Grouse volume <IconInfoCircle size={16} style={{ verticalAlign: 'middle' }} />
                    </Text>
                    <Badge variant='light' color='#26a101' size='md' radius='xs'>
                      3.2%
                    </Badge>
                  </Flex>
                  <Button p={0} variant='transparent'>
                    View
                  </Button>
                </Group>
                <Flex justify='space-between' align='center'>
                  <NumberFormatter
                    prefix='€'
                    value={4130.99}
                    thousandSeparator=','
                    decimalSeparator='.'
                    style={{ fontSize: '20px' }}
                  />
                  <NumberFormatter
                    prefix='€'
                    value={1253.61}
                    thousandSeparator=','
                    decimalSeparator='.'
                    style={{ color: 'gray', fontSize: '16px' }}
                  />
                </Flex>
              </Card.Section>

              <Card.Section inheritPadding py='md'>
                <Box>
                  <LineChart
                    h={200}
                    data={grossVolumeData}
                    dataKey='name'
                    withYAxis={false}
                    gridAxis='none'
                    xAxisProps={{
                      axisLine: true,
                      tickLine: false
                    }}
                    series={[
                      { name: 'uv', color: 'gray' },
                      { name: 'pv', color: 'blue', yAxisId: 'right' }
                    ]}
                  />
                </Box>
              </Card.Section>
            </Card>
          </div>
          <div style={{ borderRight: '1px solid #d1d1d1' }}>
            <Card>
              <Card.Section inheritPadding py='md'>
                <Group align='center' gap={0} justify='space-between'>
                  <Flex align='center' gap={8}>
                    <Text size='md' c='#424242' fw={400}>
                      Connect gross volume <IconInfoCircle size={16} style={{ verticalAlign: 'middle' }} />
                    </Text>
                    <Badge variant='light' color='#474747' size='md' radius='xs'>
                      0.0%
                    </Badge>
                  </Flex>
                  <Button p={0} variant='transparent'>
                    View
                  </Button>
                </Group>
                <Flex justify='space-between' align='center'>
                  <NumberFormatter
                    prefix='€'
                    value={3731.18}
                    thousandSeparator=','
                    decimalSeparator='.'
                    style={{ fontSize: '20px' }}
                  />
                  <NumberFormatter
                    prefix='€'
                    value={2831.14}
                    thousandSeparator=','
                    decimalSeparator='.'
                    style={{ color: 'gray', fontSize: '16px' }}
                  />
                </Flex>
              </Card.Section>

              <Card.Section inheritPadding py='md'>
                <Box>
                  <LineChart
                    h={200}
                    data={connectGrossVolumeData}
                    dataKey='name'
                    withYAxis={false}
                    gridAxis='none'
                    xAxisProps={{
                      axisLine: true,
                      tickLine: false
                    }}
                    series={[
                      { name: 'uv', color: 'gray' },
                      { name: 'pv', color: 'blue', yAxisId: 'right' }
                    ]}
                  />
                </Box>
              </Card.Section>
            </Card>
          </div>
          <div style={{}}>
            <Card>
              <Card.Section inheritPadding py='md'>
                <Group align='center' gap={0} justify='space-between'>
                  <Flex align='center' gap={8}>
                    <Text size='md' c='#424242' fw={400}>
                      Net volume from sales <IconInfoCircle size={16} style={{ verticalAlign: 'middle' }} />
                    </Text>
                    <Badge variant='light' color='#c00000' size='md' radius='xs'>
                      -60.3%
                    </Badge>
                  </Flex>
                  <Button p={0} variant='transparent'>
                    View
                  </Button>
                </Group>
                <Flex justify='space-between' align='center'>
                  <NumberFormatter
                    prefix='€'
                    value={4130.99}
                    thousandSeparator=','
                    decimalSeparator='.'
                    style={{ fontSize: '20px' }}
                  />
                  <NumberFormatter
                    prefix='€'
                    value={1253.92}
                    thousandSeparator=','
                    decimalSeparator='.'
                    style={{ color: 'gray', fontSize: '16px' }}
                  />
                </Flex>
              </Card.Section>

              <Card.Section inheritPadding py='md'>
                <Box>
                  <LineChart
                    h={200}
                    data={netVolumeFromWSalesData}
                    dataKey='name'
                    withYAxis={false}
                    gridAxis='none'
                    xAxisProps={{
                      axisLine: true,
                      tickLine: false
                    }}
                    series={[
                      { name: 'uv', color: 'gray' },
                      { name: 'pv', color: 'blue', yAxisId: 'right' }
                    ]}
                  />
                </Box>
              </Card.Section>
            </Card>
          </div>
          <div style={{ borderRight: '1px solid #d1d1d1', borderTop: '1px solid #d1d1d1' }}>
            <Card>
              <Card.Section inheritPadding py='md'>
                <Group align='center' gap={0} justify='space-between'>
                  <Flex align='center' gap={8}>
                    <Text size='md' c='#424242' fw={400}>
                      New customers <IconInfoCircle size={16} style={{ verticalAlign: 'middle' }} />
                    </Text>
                    <Badge variant='light' color='#26a101' size='md' radius='xs'>
                      0.0%
                    </Badge>
                  </Flex>
                  <Button p={0} variant='transparent'>
                    View
                  </Button>
                </Group>
                <Flex justify='space-between' align='center'>
                  <NumberFormatter
                    prefix='€'
                    value={23}
                    thousandSeparator=','
                    decimalSeparator='.'
                    style={{ fontSize: '20px' }}
                  />
                  <NumberFormatter
                    prefix='€'
                    value={12}
                    thousandSeparator=','
                    decimalSeparator='.'
                    style={{ color: 'gray', fontSize: '16px' }}
                  />
                </Flex>
              </Card.Section>

              <Card.Section inheritPadding py='md'>
                <Box>
                  <LineChart
                    h={200}
                    data={newCustomersData}
                    dataKey='name'
                    withYAxis={false}
                    gridAxis='none'
                    xAxisProps={{
                      axisLine: true,
                      tickLine: false
                    }}
                    series={[
                      { name: 'uv', color: 'gray' },
                      { name: 'pv', color: 'blue', yAxisId: 'right' }
                    ]}
                  />
                </Box>
              </Card.Section>
            </Card>
          </div>
          <div style={{ borderRight: '1px solid #d1d1d1', borderTop: '1px solid #d1d1d1' }}>
            <Card>
              <Card.Section inheritPadding py='md'>
                <Group align='center' gap={0} justify='space-between'>
                  <Flex align='center' gap={8}>
                    <Text size='md' c='#424242' fw={400}>
                      Grouse volume <IconInfoCircle size={16} style={{ verticalAlign: 'middle' }} />
                    </Text>
                    <Badge variant='light' color='#26a101' size='md' radius='xs'>
                      10.0%
                    </Badge>
                  </Flex>
                  <Button p={0} variant='transparent'>
                    View
                  </Button>
                </Group>
                <Flex justify='space-between' align='center'>
                  <NumberFormatter
                    prefix='€'
                    value={41}
                    thousandSeparator=','
                    decimalSeparator='.'
                    style={{ fontSize: '20px' }}
                  />
                  <NumberFormatter
                    prefix='€'
                    value={37}
                    thousandSeparator=','
                    decimalSeparator='.'
                    style={{ color: 'gray', fontSize: '16px' }}
                  />
                </Flex>
              </Card.Section>

              <Card.Section inheritPadding py='md'>
                <Box>
                  <LineChart
                    h={200}
                    data={newConnectedAccountsData}
                    dataKey='name'
                    withYAxis={false}
                    gridAxis='none'
                    xAxisProps={{
                      axisLine: true,
                      tickLine: false
                    }}
                    series={[
                      { name: 'uv', color: 'gray' },
                      { name: 'pv', color: 'blue', yAxisId: 'right' }
                    ]}
                  />
                </Box>
              </Card.Section>
            </Card>
          </div>
          <div style={{ borderTop: '1px solid #d1d1d1' }}>
            <Card>
              <Card.Section inheritPadding py='md'>
                <Group align='center' gap={0} justify='space-between'>
                  <Flex align='center' gap={8}>
                    <Text size='md' c='#424242' fw={400}>
                      Grouse volume <IconInfoCircle size={16} style={{ verticalAlign: 'middle' }} />
                    </Text>
                    <Badge variant='light' color='#26a101' size='md' radius='xs'>
                      23.4%
                    </Badge>
                  </Flex>
                  <Button p={0} variant='transparent'>
                    View
                  </Button>
                </Group>
                <Flex justify='space-between' align='center'>
                  <NumberFormatter
                    prefix='€'
                    value={312}
                    thousandSeparator=','
                    decimalSeparator='.'
                    style={{ fontSize: '20px' }}
                  />
                  <NumberFormatter
                    prefix='€'
                    value={0}
                    thousandSeparator=','
                    decimalSeparator='.'
                    style={{ color: 'gray', fontSize: '16px' }}
                  />
                </Flex>
              </Card.Section>

              <Card.Section inheritPadding py='md'>
                <Box>
                  <LineChart
                    h={200}
                    data={successfulPaymentsData}
                    dataKey='name'
                    withYAxis={false}
                    gridAxis='none'
                    xAxisProps={{
                      axisLine: true,
                      tickLine: false
                    }}
                    series={[
                      { name: 'uv', color: 'gray' },
                      { name: 'pv', color: 'blue', yAxisId: 'right' }
                    ]}
                  />
                </Box>
              </Card.Section>
            </Card>
          </div>
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export default ReportSection
