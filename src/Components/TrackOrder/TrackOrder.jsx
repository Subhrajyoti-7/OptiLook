import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBProgress,
    MDBProgressBar,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import p1 from '../assets/product_3.png';
import p2 from '../assets/product_2.png';

export default function OrderDetails3() {
    return (
        <>
            <section
                className="h-100 gradient-custom"
                style={{ backgroundColor: "#eee" }}
            >
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol lg="10" xl="8">
                            <MDBCard style={{ borderRadius: "10px" }}>
                                <MDBCardHeader className="px-4 py-5">
                                    <MDBTypography tag="h5" className="text-muted mb-0">
                                        Thanks for your Order,{" "}!
                                    </MDBTypography>
                                </MDBCardHeader>
                                <MDBCardBody className="p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <p
                                            className="lead fw-normal mb-0"
                                            style={{ color: "rgba(0, 147, 173, 0.9)" }}
                                        >
                                            Receipt
                                        </p>
                                        <p className="small text-muted mb-0">
                                            Receipt Voucher : 1KAU9-84UIL
                                        </p>
                                    </div>

                                    <MDBCard className="shadow-0 border mb-4">
                                        <MDBCardBody>
                                            <MDBRow>
                                                <MDBCol md="2">
                                                    <MDBCardImage
                                                        src={p1}
                                                        fluid
                                                        alt="Eyeglasses"
                                                    />
                                                </MDBCol>
                                                <MDBCol
                                                    md="2"
                                                    className="text-center d-flex justify-content-center align-items-center"
                                                >
                                                    <p className="text-muted mb-0">Square shaped falf frame black</p>
                                                </MDBCol>
                                                <MDBCol
                                                    md="2"
                                                    className="text-center d-flex justify-content-center align-items-center"
                                                >
                                                    <p className="text-muted mb-0 small">Black</p>
                                                </MDBCol>
                                                <MDBCol
                                                    md="2"
                                                    className="text-center d-flex justify-content-center align-items-center"
                                                >
                                                    <p className="text-muted mb-0 small">
                                                        SunGlass
                                                    </p>
                                                </MDBCol>
                                                <MDBCol
                                                    md="2"
                                                    className="text-center d-flex justify-content-center align-items-center"
                                                >
                                                    <p className="text-muted mb-0 small">Qty: 1</p>
                                                </MDBCol>
                                                <MDBCol
                                                    md="2"
                                                    className="text-center d-flex justify-content-center align-items-center"
                                                >
                                                    <p className="text-muted mb-0 small">1649/-</p>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr
                                                className="mb-4"
                                                style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                                            />
                                            <MDBRow className="align-items-center">
                                                <MDBCol md="2">
                                                    <p className="text-muted mb-0 small">Track Order</p>
                                                </MDBCol>
                                                <MDBCol md="10">
                                                    <MDBProgress
                                                        style={{ height: "6px", borderRadius: "16px" }}
                                                    >
                                                        <MDBProgressBar
                                                            style={{
                                                                borderRadius: "16px",
                                                                backgroundColor: "rgba(0, 147, 173, 0.9)",
                                                            }}
                                                            width={65}
                                                            valuemin={0}
                                                            valuemax={100}
                                                        />
                                                    </MDBProgress>
                                                    <div className="d-flex justify-content-around mb-1">
                                                        <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                                            Out for delivary
                                                        </p>
                                                        <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                                            Delivered
                                                        </p>
                                                    </div>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>

                                    <MDBCard className="shadow-0 border mb-4">
                                        <MDBCardBody>
                                            <MDBRow>
                                                <MDBCol md="2">
                                                    <MDBCardImage
                                                        src={p2}
                                                        fluid
                                                        alt="Phone"
                                                    />
                                                </MDBCol>
                                                <MDBCol
                                                    md="2"
                                                    className="text-center d-flex justify-content-center align-items-center"
                                                >
                                                    <p className="text-muted mb-0">Rectangle shaped glussy Day Night Eyeglass</p>
                                                </MDBCol>
                                                <MDBCol
                                                    md="2"
                                                    className="text-center d-flex justify-content-center align-items-center"
                                                >
                                                    <p className="text-muted mb-0 small">Black</p>
                                                </MDBCol>
                                                <MDBCol
                                                    md="2"
                                                    className="text-center d-flex justify-content-center align-items-center"
                                                >
                                                    <p className="text-muted mb-0 small">
                                                        PowerGlass
                                                    </p>
                                                </MDBCol>
                                                <MDBCol
                                                    md="2"
                                                    className="text-center d-flex justify-content-center align-items-center"
                                                >
                                                    <p className="text-muted mb-0 small">Qty: 1</p>
                                                </MDBCol>
                                                <MDBCol
                                                    md="2"
                                                    className="text-center d-flex justify-content-center align-items-center"
                                                >
                                                    <p className="text-muted mb-0 small">1199/-</p>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr
                                                className="mb-4"
                                                style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                                            />
                                            <MDBRow className="align-items-center">
                                                <MDBCol md="2">
                                                    <p className="text-muted mb-0 small">Track Order</p>
                                                </MDBCol>
                                                <MDBCol md="10">
                                                    <MDBProgress
                                                        style={{ height: "6px", borderRadius: "16px" }}
                                                    >
                                                        <MDBProgressBar
                                                            style={{
                                                                borderRadius: "16px",
                                                                backgroundColor: "rgba(0, 147, 173, 0.9)",
                                                            }}
                                                            width={20}
                                                            valuemin={0}
                                                            valuemax={100}
                                                        />
                                                    </MDBProgress>
                                                    <div className="d-flex justify-content-around mb-1">
                                                        <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                                            Out for delivary
                                                        </p>
                                                        <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                                            Delivered
                                                        </p>
                                                    </div>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>

                                    <div className="d-flex justify-content-between pt-2">
                                        <p className="fw-bold mb-0">Order Details</p>
                                        <p className="text-muted mb-0">
                                            <span className="fw-bold me-4">Total</span> 2848/-
                                        </p>
                                    </div>

                                    <div className="d-flex justify-content-between pt-2">
                                        <p className="text-muted mb-0">Invoice Number : 788152</p>
                                        <p className="text-muted mb-0">
                                            <span className="fw-bold me-4">Discount</span> 427.2/-
                                        </p>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <p className="text-muted mb-0">
                                            Invoice Date : 02 May,2024
                                        </p>
                                        <p className="text-muted mb-0">
                                            <span className="fw-bold me-4">GST 18%</span> 512.64/-
                                        </p>
                                    </div>

                                    <div className="d-flex justify-content-between mb-5">
                                        <p className="text-muted mb-0">
                                            Recepits Voucher : 18KU-62IIK
                                        </p>
                                        <p className="text-muted mb-0">
                                            <span className="fw-bold me-4">Delivery Charges</span>{" "}
                                            Free
                                        </p>
                                    </div>
                                </MDBCardBody>
                                <MDBCardFooter
                                    className="border-0 px-4 py-5"
                                    style={{
                                        backgroundColor: "rgba(0, 147, 173, 0.9)",
                                        borderBottomLeftRadius: "10px",
                                        borderBottomRightRadius: "10px",
                                    }}
                                >
                                    <MDBTypography
                                        tag="h5"
                                        className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                                    >
                                        Total paid: <span className="h2 mb-0 ms-2">2933.44/-</span>
                                    </MDBTypography>
                                </MDBCardFooter>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    );
}