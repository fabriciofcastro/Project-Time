import styled from "styled-components";

export const HistoryContainer = styled.div`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

    h1 {
      font-size: 2rem;
      color: ${({ theme }) => theme['gray-100']};
    }

`
export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2.5rem;
  
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    font-size: 1.2rem;
 
      th {
        background-color: ${({ theme }) => theme['gray-600']};
        padding: 1.2rem;
        text-align: left;
        color: ${({ theme }) => theme['gray-100']};
        font-size: 1.4rem;
        line-height: 2rem;
         
          &:first-child {
            border-top-left-radius: 8px;
            padding-left: 1.6rem;
          }
          &:last-child {
            border-top-right-radius: 8px;
            padding-right: 1.6rem;
          }
        }

        td {
          background-color: ${({ theme }) => theme['gray-700']};
          border-top: 4px solid ${({ theme }) => theme['gray-800']};
          padding: 1.4rem;
          font-size: 1rem;
          line-height: 1.9rem;

            &:first-child {
              padding-left: 1.8rem;
              width: 50%;
            }
            &:last-child {
              padding-right: 1.8rem;
            }
        }

    }

`

const STATUS_COLORS = {
  yellow: "yellow-500",
  green: "green-500",
  red: "red-500"
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::before {
    content: '';
    width: .8rem;
    height: .8rem;
    border-radius: 999px;
    background-color: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]}
  }
`