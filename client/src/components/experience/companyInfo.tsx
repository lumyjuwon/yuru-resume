import styled from 'styled-components';

const Container = styled.div({
  alignItems: 'center',
  marginTop: '24px',
  marginBottom: '24px'
});

const CompanyTitle = styled.span({
  fontSize: '18px',
  fontWeight: 'bold',
  '@media screen and (max-width: 768px)': {
    display: 'block'
  }
});

const EmployedPeriod = styled.span({
  fontSize: '18px',
  marginLeft: '8px',
  '@media screen and (max-width: 768px)': {
    marginLeft: '0px'
  }
});

const EmployedPeriodDate = styled.span({
  fontSize: '16px',
  marginLeft: '8px'
});

interface Props {
  children: JSX.Element | JSX.Element[];
  companyName: string;
  startDate: Date;
  endDate?: Date;
}

export function CompanyInfo(props: Props) {
  function calcEmployedPeriod(startDate: Date, endDate: Date | undefined): string {
    let calcedEmployedPeriod = `${startDate.getFullYear()}.${startDate.getMonth() + 1} ~`;
    if (endDate !== undefined) {
      calcedEmployedPeriod += ` ${endDate.getFullYear()}.${endDate.getMonth() + 1}`;
    } else {
      calcedEmployedPeriod += ' Present';
    }

    return calcedEmployedPeriod;
  }

  function calcEmployedPeriodDate(startDate: Date, endDate: Date | undefined): string {
    const _endDate = endDate === undefined ? new Date() : endDate;

    const year = _endDate.getFullYear() - startDate.getFullYear();
    const month = _endDate.getMonth() - startDate.getMonth() + 1;
    const periodMonth = year * 12 + month;
    const periodYear = Math.floor(periodMonth / 12);

    let displayDate: string;

    if (periodYear === 0) {
      displayDate = `(${periodMonth % 12}M)`;
    } else if (month === 0) {
      displayDate = `(${periodYear}Y)`;
    } else {
      displayDate = `(${periodYear}Y ${periodMonth % 12}M)`;
    }
    return displayDate;
  }

  return (
    <Container>
      <CompanyTitle>{props.companyName}</CompanyTitle>
      <EmployedPeriod>{calcEmployedPeriod(props.startDate, props.endDate)}</EmployedPeriod>
      <EmployedPeriodDate>{calcEmployedPeriodDate(props.startDate, props.endDate)}</EmployedPeriodDate>
      {props.children}
    </Container>
  );
}
