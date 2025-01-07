import React, { useState } from 'react'
import { LineChart } from '@mantine/charts'
import s from './today-section.module.scss'
import { Box, Flex, Title, Menu, Button, Text, Group, NumberFormatter, Select } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'

const DailySection: React.FC = () => {
  const [isOpenFirstSelect, setIsOpenFirstSelect] = useState(false)
  const [isOpenSecondSelect, setIsOpenSecondSelect] = useState(false)

  const data = [
    { date: '00:00', EUR: 200 },
    { date: '03:00', EUR: 300 },
    { date: '06:00', EUR: 400 },
    { date: 'Now, 12:00', EUR: 1000 },
    { date: '18:00', EUR: 800 },
    { date: '23:59', EUR: 200 }
  ]

  return (
    <Flex direction='column' gap={20}>
      <Title pl={16} pt={16}>
        Today
      </Title>
      <Flex
        style={{
          borderTop: '1px solid #e0e0e0',
          borderBottom: '1px solid #e0e0e0'
        }}
      >
        <Flex
          pl={16}
          direction='column'
          w='70%'
          align='flex-start'
          style={{
            borderRight: '1px solid #e0e0e0'
          }}
        >
          <Flex align='center' gap={20}>
            <Flex direction='column' align='start' justify='center'>
              <Box>
                <Select
                  variant='unstyled'
                  mt='md'
                  data={[
                    'Gross volume',
                    'Connect gross volume',
                    'Net volume from sales',
                    'New customers',
                    'New connected accounts',
                    'Successful payments'
                  ]}
                  rightSection={
                    <IconChevronDown size={20} className={isOpenFirstSelect ? s.selectOpen : s.selectClose} />
                  }
                  defaultValue='Gross volume'
                  onDropdownOpen={() => setIsOpenFirstSelect(true)}
                  onDropdownClose={() => setIsOpenFirstSelect(false)}
                />
              </Box>
              <Box>
                <NumberFormatter
                  prefix='€'
                  value={3500}
                  thousandSeparator=','
                  decimalSeparator='.'
                  style={{ fontSize: '20px' }}
                />
              </Box>
            </Flex>
            <Flex direction='column' align='start' justify='center' gap={5}>
              <Select
                variant='unstyled'
                mt='md'
                data={['Yesterday', 'Today', 'Last week', 'Last month']}
                rightSection={
                  <IconChevronDown size={20} className={isOpenSecondSelect ? s.selectOpen : s.selectClose} />
                }
                defaultValue='Yesterday'
                onDropdownOpen={() => setIsOpenSecondSelect(true)}
                onDropdownClose={() => setIsOpenSecondSelect(false)}
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
          <Box w='100%' h={200} pr={16} pt={20}>
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
