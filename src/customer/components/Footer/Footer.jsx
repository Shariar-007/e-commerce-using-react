import { Grid, Typography } from '@mui/material'
import React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10' container sx={{ py: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className=' pb-5' variant='h6'>Company</Typography>
                    <div>
                        <Button variant="h6" className="pb-5" gutterBottom={true}>
                        {" "}
                        About{" "}
                        </Button>
                    </div>
                    <div>
                        <Button variant="h6" className="pb-5" gutterBottom={true}>
                        {" "}
                        Blog{" "}
                        </Button>
                    </div>
                    <div>
                        <Button variant="h6" className="pb-5" gutterBottom={true}>
                        {" "}
                        Press{" "}
                        </Button>
                    </div>
                    <div>
                        <Button variant="h6" className="pb-5" gutterBottom={true}>
                        {" "}
                        Jobs{" "}</Button>
                    </div>
                    <div>
                        <Button variant="h6" className="pb-5" gutterBottom={true}>
                        {" "}
                        Partners</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className=' pb-5' variant='h6'>Solutions</Typography>
                    <div>
                        <Button variant="h6" className="pb-5" gutterBottom={true}>
                        {" "}
                        Marketing{" "}
                        </Button>
                    </div>
                    <div>
                        <Button variant="h6" className="pb-5" gutterBottom={true}>
                        {" "}
                        Analytics{" "}
                        </Button>
                    </div>
                    <div>
                        <Button variant="h6" className="pb-5" gutterBottom={true}>
                        {" "}
                        Commerce{" "}
                        </Button>
                    </div>
                    <div>
                        <Button variant="h6" className="pb-5" gutterBottom={true}>
                        {" "}
                        Insights {" "}
                        </Button>
                    </div>
                    <div>
                        <Button variant="h6" className="pb-5" gutterBottom={true}>
                        {" "}
                        Support
                        </Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Documentation</Typography>
                    <div>
                        <Button variant="h6" className="pb-5" gutterBottom={true}>
                            {" "}
                            Guides {" "}
                        </Button>
                    </div>
                    <div>
                        <Button variant="h6" className="pb-5" gutterBottom={true}>
                        {" "}
                        API Status
                        </Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className=' pb-5' variant='h6'>Legal</Typography>
                    <div>
                        <Button variant="h6" className="pb-5" gutterBottom={true}>
                        {" "}
                        Claim {" "}
                        </Button>
                    </div>
                    <div>
                        <Button variant="h6" className="pb-5" gutterBottom={true}>
                        {" "}
                        Privacy{" "}
                        </Button>
                    </div>
                    <div>
                        <Button variant="h6" className="pb-5" gutterBottom={true}>
                        {" "}
                        Terms
                        </Button>
                    </div>
                </Grid>
            </Grid>

            <Grid className='pt-20' item xs={12}>
                <Typography variant='body2' component="p" align="center">
                    &copy; 2023 My Company. All rights reserved.
                </Typography>

                <Typography variant='body2' component="p" align="center">
                    Made with love by Me.
                </Typography>

                <Typography variant='body2' component="p" align="center">
                    Icons made by {' '}
                    <Link href='https://wwww/freepik.com' color='inherit' underline="always">
                        Freepik
                    </Link>{' '}
                    from{' '}
                    <Link href='https://wwww/freepik.com' color='inherit' underline="always">
                        www.flaticon.com
                    </Link>
                </Typography>
            </Grid>
        </div>
    )
}

export default Footer