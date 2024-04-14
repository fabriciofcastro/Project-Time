import { HistoryContainer, HistoryList, Status } from './style'

export const History = () => {
  return (
    <HistoryContainer>

      <HistoryList>
        <table>
          <thead>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutoos</td>
              <td>Há dois meses</td>
              <td>
                <Status statusColor="green">
                  Concluído
                </Status></td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutoos</td>
              <td>Há dois meses</td>
              <td>
                <Status statusColor="green">
                  Concluído
                </Status></td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutoos</td>
              <td>Há dois meses</td>
              <td>
                <Status statusColor="green">
                  Concluído
                </Status></td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 Minutoos</td>
              <td>Há dois meses</td>
              <td>
                <Status statusColor="yellow">
                  Em andamento
                </Status>

              </td>
            </tr>

            <tr>
              <td>Tarefa</td>
              <td>20 Minutoos</td>
              <td>Há dois meses</td>
              <td>
                <Status statusColor="red">
                  Interrompido
                </Status >
              </td>
            </tr>
          </tbody>
        </table>

      </HistoryList>
    </HistoryContainer>
  )
}
