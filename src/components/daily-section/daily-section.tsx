import React from 'react'
import { LineChart } from '@mantine/charts'
import s from './daily-section.module.scss'
import { Box, Flex, Title, Menu, Button, Text, Group, NumberFormatter } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'

const DailySection: React.FC = () => {
  const data = [
    { date: '00:00', EUR: 200 },
    { date: '03:00', EUR: 300 },
    { date: '06:00', EUR: 400 },
    { date: 'Now, 12:00', EUR: 1000 },
    { date: '18:00', EUR: 800 },
    { date: '23:59', EUR: 200 }
  ]

  return (
    <Flex pl={50} pr={50} direction='column' gap={50}>
      <Title pt={20}>Today</Title>
      <Flex
        style={{
          borderTop: '1px solid #e0e0e0',
          borderBottom: '1px solid #e0e0e0'
        }}
      >
        <Flex
          direction='column'
          w='70%'
          align='flex-start'
          style={{
            borderRight: '1px solid #e0e0e0'
          }}
        >
          <Flex direction='column'>
            <Flex align='center' justify='center' gap={40}>
              <Box pt={5}>
                <Menu>
                  <Menu.Target>
                    <Button variant='subtle' size='sm' display='flex' style={{ alignItems: 'center', gap: '4px' }}>
                      Gross volume
                      <IconChevronDown size={16} />
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item>Connect gross volume</Menu.Item>
                    <Menu.Item>Net volume from sales</Menu.Item>
                    <Menu.Item>New customers</Menu.Item>
                    <Menu.Item>New connected accounts</Menu.Item>
                    <Menu.Item>Successful payments</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Box>
              <Box pt={5}>
                <Menu>
                  <Menu.Target>
                    <Button variant='subtle' size='sm' style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      Yesterday
                      <IconChevronDown size={16} />
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item>Today</Menu.Item>
                    <Menu.Item>Last week</Menu.Item>
                    <Menu.Item>Last month</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Box>
            </Flex>
            <Flex align='end' justify='center' gap={90}>
              <NumberFormatter
                prefix='€'
                value={3500}
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
          </Flex>
          <Box w='100%' h={200} pr={16}>
            <LineChart
              h='100%'
              w='100%'
              data={data}
              dataKey='date'
              yAxisProps={{ domain: [0, 1000], hide: true }}
              xAxisProps={{
                axisLine: true,
                tickLine: false
              }}
              gridProps={{ horizontal: false, vertical: true }}
              series={[{ name: 'EUR', color: 'blue' }]}
              lineProps={{ strokeWidth: 2 }}
              withDots={false}
            />
          </Box>
        </Flex>
        <Flex
          w='30%'
          style={{
            borderLeft: '1px solid #e0e0e0'
          }}
        >
          <Flex direction='column' w='100%'>
            <Flex
              justify='space-between'
              align='flex-start'
              style={{
                borderBottom: '1px solid #e0e0e0'
              }}
            >
              <Flex direction='column' gap={10} pl={16} pb={16} pt={10}>
                <Text pt={3} c='#313131'>
                  EUR Balance
                </Text>
                <NumberFormatter
                  prefix='€'
                  value={3582.31}
                  thousandSeparator=','
                  decimalSeparator='.'
                  style={{ fontSize: '20px' }}
                />
                <Text c='gray' size='xs'>
                  Estimated future payouts
                </Text>
              </Flex>
              <Button pt={10} variant='transparent'>
                View
              </Button>
            </Flex>
            <Flex justify='space-between' align='flex-start'>
              <Flex direction='column' gap={10} pl={16} pt={10} pb={16}>
                <Text pt={3} c='#313131'>
                  EUR Balance
                </Text>
                <NumberFormatter
                  prefix='€'
                  value={4130.99}
                  thousandSeparator=','
                  decimalSeparator='.'
                  style={{ fontSize: '20px' }}
                />
                <Text c='gray' size='xs'>
                  Deposited on 8 Jun
                </Text>
              </Flex>
              <Button pt={10} variant='transparent'>
                View
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DailySection
