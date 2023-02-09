import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto 50px;
  width: 274px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

export const Avatar = styled.img`
  width: 110px;
  margin-bottom: 20px;
  border: 5px solid #e4e9f0;
  border-radius: 50%;
  background-color: #e4e9f0;
`

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #2e4054;  
`

export const Tag = styled.p`
  font-weight: 600;
  margin-bottom: 6px;
  color: #82919f;  
`

export const Location = styled.p`
  font-weight: 600;
  color: #82919f;  
`

export const Stats = styled.ul`
  display: flex;
  padding: 0;
`
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  background-color: #f3f6f9;
  border: 1px solid #e4e9f0;
`

export const StatsLabel = styled.span`
  font-size: 14px;
  color: #82919f;
  margin-bottom: 5px;
`

export const StatsQuantity = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #2e4054;
`