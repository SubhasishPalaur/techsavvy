import { useEffect, useState } from "react";


const Dashboard = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await fetch('https://coreapi.hectorai.live/api/day-parting/heatmap-list', {
              method: 'POST',
              headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGI0ZTNhN2Y1YmU4ZDY2MjVlN2I0MiIsImZ1bGxOYW1lIjoiU3lzdGVtIFRlc3QiLCJlbWFpbCI6InRlc3RAZGV2LmNvbSIsInNlc3Npb25JZCI6InJhbmRvbVN0cmluZyIsImlhdCI6MTcyMDQwNjQzNH0.oo2gUHroTcJ7X-I0-hNvtuG4tq6sGL2yr4Veaf37JPc',
                'X-USER-IDENTITY': 'U2FsdGVkX1/s3KYiwn1BdNtI1nNitQYbPVGs5G6NloO7PVGlCBTzYpJzAOD/8GaIp30IcvyKuBArXvm5xNN+gOhrSx51l49Ejxan4p7mt1vAUIE6/O277AUuMZVIMsmOtF5YGyaGkyDk9bMjArr3ekLdCKAZu9xXN/b92jqFqXb2jy4tbQbp8UUQxgywAWk1gR4dSb/vaJt4oEIeh0EWuEc4xU2NVdGSedANzYRqUEatsdtRYbNbdkZMt9koQcKO55/Y6fGafYUCztvkASn6i8WyPIxXMq6vf+xo4IYXeOh2WP8WgH/cQgq6V74Fnl82KYtUvGzWVMXpm2rrhsHewJptgJvJY+NinV05HdRJGtXQ1SN3/IhqyJZJhTb/TcO5SkDa8dIGfwgcciGspOofrA==',
                'Content-Type': 'application/json'},
              body: JSON.stringify({
                startDate: '2024-06-08',
                endDate: '2024-07-07',
                metrics: ['CPC', 'CR_perc', 'ROAS']
              })
            });
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error: any) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
      }, []);
    return (
        <>subh</>
    )
}

export default Dashboard
