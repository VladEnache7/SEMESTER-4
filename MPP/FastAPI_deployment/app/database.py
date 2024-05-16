import pyodbc

# # Define your connection string
# conn_str = (
#     r'DRIVER={ODBC Driver 17 for SQL Server};'
#     r'SERVER=sqlserver-movies-germany.database.windows.net;'
#     r'DATABASE=sqldb-movies-germany;'
#     r'UID=vladai;'
#     r'PWD=pAr0!4mE4;'
# )

# Establish a connection
conn = pyodbc.connect("Driver={ODBC Driver 18 for SQL Server};Server=tcp:sqlserver-movies-germany.database.windows.net,1433;Database=sqldb-movies-germany;Uid=vladai;Pwd=pAr0!4mE4;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;")

# Create a cursor from the connection
cursor = conn.cursor()

# Execute a query - select first 10 rows from the table movies
print(cursor.)
print(cursor.execute("SELECT TOP 10 * FROM Movies"))
print(cursor.fetchall())