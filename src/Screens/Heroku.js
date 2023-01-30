import * as React from 'react';
import {useState, useEffect} from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const columns = [
  { field: 'name', headerName: 'Nama', width: 250 },
  { field: 'birth_year', headerName: 'Birth Year', width: 150 },
  { field: 'death_year', headerName: 'Death Year', width: 150 },
  { field: 'description', headerName: 'Description', width: 495 },
  { field: 'ascension_year', headerName: 'Ascension Year', width: 150 },
];

export default function Heroku() {
	const [tableData, setTableData] = useState([])
   	useEffect(() => {
    	fetch("https://indonesia-public-static-api.vercel.app/api/heroes")
    	  .then((data) => data.json())
    	  .then((data) => setTableData(data))
  	}, [])
	console.log(tableData)
	
	function generateRandom() {
    	var length = 8,
    		charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    	    retVal = "";
    	for (var i = 0, n = charset.length; i < length; ++i) {
    	    retVal += charset.charAt(Math.floor(Math.random() * n));
    	}
    	return retVal;
	}

  return (
    <>
      <div className="min-h-full">
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
                <div role="presentation" className="py-2">
                    <Breadcrumbs aria-label="breadcrumb">
                      <Link underline="hover" color="inherit" href="/">
                        Home
                      </Link>
                      <Link
                        underline="hover"
                        color="text.primary"
                        href="/Heroku"
                        aria-current="page"
                      >
                        Heroku
                      </Link>
                    </Breadcrumbs>
                </div>
				<div className="py-4 mb-4">
					<div className="mb-3">
                		<h1 className="text-3xl font-bold">Daftar Pahlawan Indonesia</h1>
                	</div>
					<Autocomplete
						options={tableData}
						getOptionLabel={option => option.name}
						renderInput={params => (
							<TextField
								{...params}
								label="Cari Pahlawan"
								variant="outlined"
							/>
						)}
					/>
				</div>
				<div style={{ height: 700, width: '100%' }}>
					<DataGrid
						rows={tableData}
						columns={columns}
						getRowId={(row) => generateRandom()}
						disableSelectionOnClick
					/>
				</div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}