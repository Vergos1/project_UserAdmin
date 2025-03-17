import React, { useState } from 'react'
import s from '../payments-page/payments-page.module.scss'
import { Title, Flex, Select, rem, Box, Button, Tabs, Table, Text, Group, Badge, Checkbox, Menu } from '@mantine/core'
import {
  IconFilterFilled,
  IconArrowUpRight,
  IconPlus,
  IconDots,
  IconEdit,
  IconTrash,
  IconCreditCardRefund,
  IconX,
  IconCheck
} from '@tabler/icons-react'

const data = {
  succeeded: [
    {
      amount: 'US$352.22',
      status: 'Succeeded',
      description: 'fe3d8216...',
      customer: 'hefovo87@...',
      date: '7 Jul, 14:04'
    },
    {
      amount: 'US$39.99',
      status: 'Succeeded',
      description: '0d7b6ac7...',
      customer: 'john.doe@...',
      date: '7 Jul, 14:01'
    },
    {
      amount: 'US$450.00',
      status: 'Succeeded',
      description: 'a1b2c3d4...',
      customer: 'user1@...',
      date: '7 Jul, 14:10'
    },
    {
      amount: 'US$120.00',
      status: 'Succeeded',
      description: 'e5f6g7h8...',
      customer: 'user2@...',
      date: '6 Jul, 15:05'
    },
    {
      amount: 'US$75.50',
      status: 'Succeeded',
      description: 'i9j0k1l2...',
      customer: 'user3@...',
      date: '6 Jul, 15:30'
    },
    {
      amount: 'US$89.99',
      status: 'Succeeded',
      description: 'm3n4o5p6...',
      customer: 'user4@...',
      date: '6 Jul, 16:00'
    },
    {
      amount: 'US$22.00',
      status: 'Succeeded',
      description: 'q7r8s9t0...',
      customer: 'user5@...',
      date: '5 Jul, 14:50'
    },
    {
      amount: 'US$300.00',
      status: 'Succeeded',
      description: 'u1v2w3x4...',
      customer: 'user6@...',
      date: '5 Jul, 12:40'
    },
    {
      amount: 'US$48.30',
      status: 'Succeeded',
      description: 'y5z6a7b8...',
      customer: 'user7@...',
      date: '5 Jul, 11:50'
    },
    {
      amount: 'US$10.00',
      status: 'Succeeded',
      description: 'c9d0e1f2...',
      customer: 'user8@...',
      date: '5 Jul, 10:45'
    },
    {
      amount: 'US$75.00',
      status: 'Succeeded',
      description: 'g3h4i5j6...',
      customer: 'user9@...',
      date: '4 Jul, 09:35'
    },
    {
      amount: 'US$250.00',
      status: 'Succeeded',
      description: 'k7l8m9n0...',
      customer: 'user10@...',
      date: '4 Jul, 08:20'
    },
    {
      amount: 'US$60.50',
      status: 'Succeeded',
      description: 'o1p2q3r4...',
      customer: 'user11@...',
      date: '3 Jul, 14:15'
    },
    {
      amount: 'US$150.00',
      status: 'Succeeded',
      description: 's5t6u7v8...',
      customer: 'user12@...',
      date: '3 Jul, 12:10'
    },
    {
      amount: 'US$35.00',
      status: 'Succeeded',
      description: 'w9x0y1z2...',
      customer: 'user13@...',
      date: '2 Jul, 10:00'
    },
    {
      amount: 'US$18.75',
      status: 'Succeeded',
      description: 'a3b4c5d6...',
      customer: 'user14@...',
      date: '2 Jul, 09:45'
    },
    {
      amount: 'US$31.40',
      status: 'Succeeded',
      description: 'w9h2y1g2...',
      customer: 'user13@...',
      date: '2 Jul, 10:00'
    },
    {
      amount: 'US$18.75',
      status: 'Succeeded',
      description: 'a3b4c5d6...',
      customer: 'user14@...',
      date: '2 Jul, 09:45'
    },
    {
      amount: 'US$35.00',
      status: 'Succeeded',
      description: 'w9x0y1z2...',
      customer: 'user13@...',
      date: '2 Jul, 10:00'
    },
    {
      amount: 'US$18.75',
      status: 'Succeeded',
      description: 'a3hyb4c1d6...',
      customer: 'user14@...',
      date: '2 Jul, 09:45'
    }
  ],
  refunded: [
    {
      amount: 'US$19.99',
      status: 'Refunded',
      description: 'c9e0027a...',
      customer: 'refunded_user@...',
      date: '6 Jul, 12:30'
    },
    {
      amount: 'US$50.00',
      status: 'Refunded',
      description: 'd3f4g5h6...',
      customer: 'user15@...',
      date: '5 Jul, 13:20'
    },
    {
      amount: 'US$10.99',
      status: 'Refunded',
      description: 'i7j8k9l0...',
      customer: 'user16@...',
      date: '5 Jul, 11:10'
    },
    {
      amount: 'US$200.00',
      status: 'Refunded',
      description: 'm1n2o3p4...',
      customer: 'user17@...',
      date: '4 Jul, 15:30'
    },
    { amount: 'US$75.50', status: 'Refunded', description: 'q5r6s7t8...', customer: 'user18@...', date: '3 Jul, 14:20' }
  ],
  uncaptured: [
    {
      amount: 'US$142.17',
      status: 'Uncaptured',
      description: '73bb0713...',
      customer: 'uncaptured_user@...',
      date: '6 Jul, 10:00'
    },
    {
      amount: 'US$75.00',
      status: 'Uncaptured',
      description: 'a1b2c3d4...',
      customer: 'user19@...',
      date: '5 Jul, 09:30'
    },
    {
      amount: 'US$33.00',
      status: 'Uncaptured',
      description: 'e5f6g7h8...',
      customer: 'user20@...',
      date: '5 Jul, 11:15'
    },
    {
      amount: 'US$125.00',
      status: 'Uncaptured',
      description: 'i9j0k1l2...',
      customer: 'user21@...',
      date: '5 Jul, 13:00'
    },
    {
      amount: 'US$200.50',
      status: 'Uncaptured',
      description: 'm3n4o5p6...',
      customer: 'user22@...',
      date: '4 Jul, 10:00'
    },
    {
      amount: 'US$60.00',
      status: 'Uncaptured',
      description: 'q7r8s9t0...',
      customer: 'user23@...',
      date: '3 Jul, 16:20'
    },
    {
      amount: 'US$90.00',
      status: 'Uncaptured',
      description: 'u1v2w3x4...',
      customer: 'user24@...',
      date: '3 Jul, 12:00'
    },
    {
      amount: 'US$50.00',
      status: 'Uncaptured',
      description: 'y5z6a7b8...',
      customer: 'user25@...',
      date: '2 Jul, 11:45'
    },
    {
      amount: 'US$40.25',
      status: 'Uncaptured',
      description: 'c9d0e1f2...',
      customer: 'user26@...',
      date: '2 Jul, 10:30'
    },
    {
      amount: 'US$300.00',
      status: 'Uncaptured',
      description: 'g3h4i5j6...',
      customer: 'user27@...',
      date: '2 Jul, 09:20'
    }
  ]
}

const PaymentsPage: React.FC = () => {
  interface Payment {
    amount: string
    status: string
    description: string
    customer: string
    date: string
  }

  const [selectedTab, setSelectedTab] = useState<string | null>('succeeded')
  const [selectedRowsSucceeded, setSelectedRowsSucceeded] = useState<number[]>([])
  const [selectedRowsRefunded, setSelectedRowsRefunded] = useState<number[]>([])
  const [selectedRowsUncaptured, setSelectedRowsUncaptured] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 15
  const [selectedRows, setSelectedRows] = useState<number[]>([])

  const getPaginatedData = (rows: Payment[]) => {
    const startIndex = (currentPage - 1) * rowsPerPage
    const endIndex = startIndex + rowsPerPage
    return rows.slice(startIndex, endIndex)
  }

  const handleTabChange = (value: string | null) => {
    setSelectedTab(value)
    setCurrentPage(1)
  }
  const allData = data.succeeded.concat(data.refunded, data.uncaptured)

  const totalPages = Math.ceil(
    (selectedTab === 'all'
      ? allData.length
      : selectedTab === 'succeeded'
        ? data.succeeded.length
        : selectedTab === 'refunded'
          ? data.refunded.length
          : data.uncaptured.length) / rowsPerPage
  )

  const handleCheckboxChange = (
    index: number,
    selectedRows: number[],
    setSelectedRows: React.Dispatch<React.SetStateAction<number[]>>
  ) => {
    setSelectedRows(prevSelected => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter(id => id !== index)
      } else {
        return [...prevSelected, index]
      }
    })
  }

  const selectedCount = selectedRows.filter(index =>
    getPaginatedData(allData).some((_, rowIndex) => rowIndex === index)
  ).length

  const handleSelectAllChange = (
    rows: Payment[],
    selectedRows: number[],
    setSelectedRows: React.Dispatch<React.SetStateAction<number[]>>
  ) => {
    const paginatedIndexes = getPaginatedData(rows).map((_, index) => index + (currentPage - 1) * rowsPerPage)

    if (paginatedIndexes.some(index => selectedRows.includes(index))) {
      setSelectedRows(selectedRows.filter(id => !paginatedIndexes.includes(id)))
    } else {
      setSelectedRows([...selectedRows, ...paginatedIndexes.filter(id => !selectedRows.includes(id))])
    }
  }

  const renderTableRows = (rows: Payment[], selectedRows: number[], handleCheckboxChange: (index: number) => void) => {
    const paginatedData = getPaginatedData(rows)
    return paginatedData.map((item, pageIndex) => {
      const actualIndex = pageIndex + (currentPage - 1) * rowsPerPage
      const isLastRow = pageIndex === paginatedData.length - 1

      return (
        <Table.Tr
          key={actualIndex}
          style={{
            borderBottom: isLastRow ? '1px solid #ccc' : undefined
          }}
        >
          <Table.Td>
            <Checkbox checked={selectedRows.includes(actualIndex)} onChange={() => handleCheckboxChange(actualIndex)} />
          </Table.Td>
          <Table.Td>{item.amount}</Table.Td>
          <Table.Td>
            {item.status === 'Refunded' ? (
              <Badge color='blue' variant='light' radius='sm' leftSection={<IconCreditCardRefund size={16} />}>
                Refunded
              </Badge>
            ) : item.status === 'Uncaptured' ? (
              <Badge color='red' variant='light' radius='sm' leftSection={<IconX size={16} />}>
                Uncaptured
              </Badge>
            ) : (
              <Badge color='green' variant='light' radius='sm' leftSection={<IconCheck size={16} />}>
                {item.status}
              </Badge>
            )}
          </Table.Td>
          <Table.Td>{item.description}</Table.Td>
          <Table.Td>{item.customer}</Table.Td>
          <Table.Td>{item.date}</Table.Td>
          <Table.Td style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '15px' }}>
            <Menu>
              <Menu.Target>
                <Button variant='subtle' size='xs' style={{ padding: 0 }}>
                  <IconDots size={16} />
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item c='blue'>
                  <IconEdit size={14} /> Edit
                </Menu.Item>
                <Menu.Item color='red'>
                  <IconTrash size={14} /> Delete
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Table.Td>
        </Table.Tr>
      )
    })
  }

  return (
    <>
      <Flex direction='column' pt={32} pl={40} pr={40}>
        <Flex justify='space-between' align='end'>
          <Title pb={20}>Payments</Title>
          <Flex gap={8} align='center' justify='center'>
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
                maxWidth: '135px'
              }}
            >
              <Select
                pr={0}
                size='xs'
                fw={500}
                fs='14px'
                styles={{
                  input: { border: 'none', borderRadius: 0, height: rem(36) }
                }}
                defaultValue='Last year'
                placeholder={'Filter'}
                data={['Less than $10', 'From $10 to $50', 'From $50 to $100', 'More than $100']}
                rightSection={<IconFilterFilled size={16} />}
              />
            </Box>
            <Button
              size='xs'
              styles={{
                root: {
                  overflow: 'hidden',
                  borderRadius: rem(6),
                  border: '1px solid #ccc',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  height: rem(29),
                  maxWidth: '85px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0 8px',
                  backgroundColor: 'white',
                  color: '#3C4257',
                  fontWeight: 500,
                  fontSize: '14px',
                  cursor: 'pointer'
                }
              }}
              leftSection={<IconArrowUpRight size={16} style={{ color: '#3C4257' }} />}
            >
              Export
            </Button>
            <Button
              variant='filled'
              size='xs'
              styles={{
                root: {
                  overflow: 'hidden',
                  borderRadius: rem(6),
                  border: '1px solid #ccc',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  height: rem(29),
                  maxWidth: '148px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0 8px',

                  fontWeight: 500,
                  fontSize: '14px',
                  cursor: 'pointer'
                }
              }}
              leftSection={<IconPlus size={16} style={{ color: '#fff' }} />}
            >
              Create payment
            </Button>
          </Flex>
        </Flex>

        <Tabs value={selectedTab} onChange={handleTabChange} defaultValue='all'>
          <Tabs.List>
            <Tabs.Tab value='all'>All</Tabs.Tab>
            <Tabs.Tab value='succeeded'>Succeeded</Tabs.Tab>
            <Tabs.Tab value='refunded'>Refunded</Tabs.Tab>
            <Tabs.Tab value='uncaptured'>Uncaptured</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value='all' pt='sm'>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>
                    <Checkbox
                      checked={getPaginatedData(allData).every((_, index) =>
                        selectedRows.includes(index + (currentPage - 1) * rowsPerPage)
                      )}
                      indeterminate={
                        getPaginatedData(allData).some((_, index) =>
                          selectedRows.includes(index + (currentPage - 1) * rowsPerPage)
                        ) &&
                        !getPaginatedData(allData).every((_, index) =>
                          selectedRows.includes(index + (currentPage - 1) * rowsPerPage)
                        )
                      }
                      onChange={() => handleSelectAllChange(allData, selectedRows, setSelectedRows)}
                    />
                  </Table.Th>
                  <Table.Th>Amount</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Description</Table.Th>
                  <Table.Th>Customer</Table.Th>
                  <Table.Th>Date</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {renderTableRows(allData, selectedRows, index =>
                  handleCheckboxChange(index, selectedRows, setSelectedRows)
                )}
              </Table.Tbody>
            </Table>
          </Tabs.Panel>

          <Tabs.Panel value='succeeded' pt='sm'>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>
                    <Checkbox
                      checked={getPaginatedData(data.succeeded).every((_, index) =>
                        selectedRowsSucceeded.includes(index + (currentPage - 1) * rowsPerPage)
                      )}
                      indeterminate={
                        getPaginatedData(data.succeeded).some((_, index) =>
                          selectedRowsSucceeded.includes(index + (currentPage - 1) * rowsPerPage)
                        ) &&
                        !getPaginatedData(data.succeeded).every((_, index) =>
                          selectedRowsSucceeded.includes(index + (currentPage - 1) * rowsPerPage)
                        )
                      }
                      onChange={() =>
                        handleSelectAllChange(data.succeeded, selectedRowsSucceeded, setSelectedRowsSucceeded)
                      }
                    />
                  </Table.Th>
                  <Table.Th>Amount</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Description</Table.Th>
                  <Table.Th>Customer</Table.Th>
                  <Table.Th>Date</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {renderTableRows(data.succeeded, selectedRowsSucceeded, index =>
                  handleCheckboxChange(index, selectedRowsSucceeded, setSelectedRowsSucceeded)
                )}
              </Table.Tbody>
            </Table>
          </Tabs.Panel>

          <Tabs.Panel value='refunded' pt='sm'>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>
                    <Checkbox
                      checked={getPaginatedData(data.refunded).every((_, index) =>
                        selectedRowsRefunded.includes(index + (currentPage - 1) * rowsPerPage)
                      )}
                      indeterminate={
                        getPaginatedData(data.refunded).some((_, index) =>
                          selectedRowsRefunded.includes(index + (currentPage - 1) * rowsPerPage)
                        ) &&
                        !getPaginatedData(data.refunded).every((_, index) =>
                          selectedRowsRefunded.includes(index + (currentPage - 1) * rowsPerPage)
                        )
                      }
                      onChange={() =>
                        handleSelectAllChange(data.refunded, selectedRowsRefunded, setSelectedRowsRefunded)
                      }
                    />
                  </Table.Th>
                  <Table.Th>Amount</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Description</Table.Th>
                  <Table.Th>Customer</Table.Th>
                  <Table.Th>Date</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {renderTableRows(data.refunded, selectedRowsRefunded, index =>
                  handleCheckboxChange(index, selectedRowsRefunded, setSelectedRowsRefunded)
                )}
              </Table.Tbody>
            </Table>
          </Tabs.Panel>

          <Tabs.Panel value='uncaptured' pt='sm'>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>
                    <Checkbox
                      checked={getPaginatedData(data.uncaptured).every((_, index) =>
                        selectedRowsUncaptured.includes(index + (currentPage - 1) * rowsPerPage)
                      )}
                      indeterminate={
                        getPaginatedData(data.uncaptured).some((_, index) =>
                          selectedRowsUncaptured.includes(index + (currentPage - 1) * rowsPerPage)
                        ) &&
                        !getPaginatedData(data.uncaptured).every((_, index) =>
                          selectedRowsUncaptured.includes(index + (currentPage - 1) * rowsPerPage)
                        )
                      }
                      onChange={() =>
                        handleSelectAllChange(data.uncaptured, selectedRowsUncaptured, setSelectedRowsUncaptured)
                      }
                    />
                  </Table.Th>
                  <Table.Th>Amount</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Description</Table.Th>
                  <Table.Th>Customer</Table.Th>
                  <Table.Th>Date</Table.Th>
                  <Table.Th></Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {renderTableRows(data.uncaptured, selectedRowsUncaptured, index =>
                  handleCheckboxChange(index, selectedRowsUncaptured, setSelectedRowsUncaptured)
                )}
              </Table.Tbody>
            </Table>
          </Tabs.Panel>
        </Tabs>
        <Flex justify='space-between' pt={20}>
          <Flex justify='space-between' align='center'>
            <Text size='sm' fw={500} c='#3C4257' style={{ display: 'flex', gap: '2px' }}>
              <Box>
                {
                  getPaginatedData(
                    selectedTab === 'succeeded'
                      ? data.succeeded
                      : selectedTab === 'refunded'
                        ? data.refunded
                        : selectedTab === 'uncaptured'
                          ? data.uncaptured
                          : [...data.succeeded, ...data.refunded, ...data.uncaptured]
                  ).length
                }
              </Box>
              of
              <Box>
                {selectedTab === 'succeeded'
                  ? data.succeeded.length
                  : selectedTab === 'refunded'
                    ? data.refunded.length
                    : selectedTab === 'uncaptured'
                      ? data.uncaptured.length
                      : data.succeeded.length + data.refunded.length + data.uncaptured.length}
              </Box>
            </Text>
          </Flex>

          <Flex justify='space-between' align='center' gap={8}>
            <Button
              styles={theme => ({
                root: {
                  overflow: 'hidden',
                  borderRadius: rem(6),
                  border: '1px solid #ccc',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  height: rem(29),
                  maxWidth: '78px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0 8px',
                  color: '#3C4257',
                  fontWeight: 500,
                  fontSize: '14px',
                  '&[data-active="true"]': {
                    borderColor: theme.colors.blue[6],
                    color: theme.colors.blue[6],
                    backgroundColor: `rgba(${theme.colors.blue[6].match(/\d+/g)?.join(', ')}, 0.2)`
                  },
                  '&:disabled': {
                    opacity: 0.5,
                    cursor: 'not-allowed',
                    backgroundColor: theme.colors.gray[2]
                  }
                }
              })}
              variant='subtle'
              data-active={currentPage > 1 ? 'true' : 'false'}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
            >
              Previous
            </Button>

            <Text size='14px' fw={500} c='#3C4257' style={{ display: 'flex', gap: '3px' }}>
              <Box> {currentPage}</Box>
              of
              <Box> {totalPages}</Box>
            </Text>
            <Button
              styles={theme => ({
                root: {
                  overflow: 'hidden',
                  borderRadius: rem(6),
                  border: '1px solid #ccc',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  height: rem(29),
                  maxWidth: '48px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0 8px',
                  color: '#3C4257',
                  fontWeight: 500,
                  fontSize: '14px',
                  '&[data-active="true"]': {
                    borderColor: theme.colors.blue[6],
                    color: theme.colors.blue[6],
                    backgroundColor: `rgba(${theme.colors.blue[6].match(/\d+/g)?.join(', ')}, 0.2)`
                  },
                  '&:disabled': {
                    opacity: 0.5,
                    cursor: 'not-allowed',
                    backgroundColor: theme.colors.gray[2]
                  }
                }
              })}
              variant='subtle'
              data-active={currentPage > 1 ? 'true' : 'false'}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
            >
              Next
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default PaymentsPage
