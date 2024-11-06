"use client";
import React from "react";
import styles from "./showcase.module.css";
import {
  BootstrapAlert,
  BootstrapButton,
  BootstrapCarousel,
  BootstrapCollapse,
  BootstrapDropdown,
  BootstrapModal,
  BootstrapOffcanvas,
  BootstrapPopover,
  BootstrapScrollSpy,
  BootstrapTab,
  BootstrapToast,
  BootstrapTooltip,
} from "@/hooks/useBootstrap";
import Image from "next/image";
import { useToast } from "@/hooks/useToast";

const BootstrapComponentsShowcase = () => {
  const { showToast, ToastComponent } = useToast({
    title: "Notification",
    children: "This is a custom toast message.",
  });

  return (
    <div>
      {/* Alert Component */}
      <section className={styles.componentSection}>
        <h2>Alert</h2>
        <BootstrapAlert className="alert-warning">
          This is a warning alert!
        </BootstrapAlert>
      </section>

      {/* Carousel Component */}
      <section className={styles.componentSection}>
        <h2>Carousel</h2>
        <div className={styles.carouselContainer}>
          <BootstrapCarousel id="carouselExample">
            <div className="carousel-item active">
              <Image
                src="https://picsum.photos/id/0/600/400"
                className="d-block w-100 h-auto object-fit-cover"
                alt="Slide 1"
                width={600}
                height={400}
                priority
              />
            </div>
            <div className="carousel-item">
              <Image
                src="https://picsum.photos/id/2/600/400"
                className="d-block w-100 h-auto object-fit-cover"
                alt="Slide 2"
                width={600}
                height={400}
                priority
              />
            </div>
            <div className="carousel-item">
              <Image
                src="https://picsum.photos/id/6/600/400"
                className="d-block w-100 h-auto object-fit-cover"
                alt="Slide 3"
                width={600}
                height={400}
                priority
              />
            </div>
          </BootstrapCarousel>
        </div>
      </section>

      {/* Button Component */}
      <section className={styles.componentSection}>
        <h2>Button</h2>
        <BootstrapButton className="btn btn-primary">
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </BootstrapButton>
      </section>

      {/* Collapse Component */}
      <section className={styles.componentSection}>
        <h2>Collapse</h2>
        <button
          className="btn btn-primary mb-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Toggle Collapse
        </button>
        <BootstrapCollapse id="collapseExample">
          <div className="card card-body">
            This is a collapsible section controlled by the button above!
          </div>
        </BootstrapCollapse>
      </section>

      {/* Dropdown Component */}
      <section className={styles.componentSection}>
        <h2>Dropdown</h2>
        <BootstrapDropdown className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
          </ul>
        </BootstrapDropdown>
      </section>

      {/* Modal Component */}
      <section className={styles.componentSection}>
        <h2>Modal</h2>

        {/* Botão para abrir o modal */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Open Modal
        </button>

        {/* Componente Modal */}
        <BootstrapModal id="exampleModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </BootstrapModal>
      </section>

      {/* Tooltip Component */}
      <section className={styles.componentSection}>
        <h2>Tooltip</h2>
        <BootstrapTooltip title="I am a Tooltip">
          <button className="btn btn-info" title="Tooltip on top">
            Hover me
          </button>
        </BootstrapTooltip>
      </section>

      {/* Offcanvas Component */}
      <section className={styles.componentSection}>
        <h2>Offcanvas</h2>
        <button
          className="btn btn-primary"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
        >
          Open Offcanvas
        </button>
        <BootstrapOffcanvas id="offcanvasExample">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Offcanvas Title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            This is the content inside the offcanvas component!
          </div>
        </BootstrapOffcanvas>
      </section>

      {/* Popover Component */}
      <section className={styles.componentSection}>
        <h2>Popover</h2>
        <BootstrapPopover title="Popover Content" data-bs-placement="right">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-toggle="popover"
          >
            Hover to show popover
          </button>
        </BootstrapPopover>
      </section>

      {/* ScrollSpy Component */}
      <section className={styles.componentSection}>
        <h2>ScrollSpy</h2>
        <BootstrapScrollSpy
          id="scrollspyExample"
          className="scrollspy-example border rounded p-3"
        >
          {/* Navbar ScrollSpy */}
          <nav
            id="navbar-example3"
            className="navbar px-3 mb-3 border-bottom"
          >
            <a className="navbar-brand fw-bold" href="#">
              ScrollSpy Navbar
            </a>
            <nav className="nav nav-pills flex-column">
              <a className="nav-link" href="#section1">
                Section 1
              </a>
              <a className="nav-link" href="#section2">
                Section 2
              </a>
              <a className="nav-link" href="#section3">
                Section 3
              </a>
            </nav>
          </nav>

          {/* Scrollable Content Section */}
          <div
            className="overflow-auto p-3 border rounded"
            style={{ maxHeight: "300px" }}
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-offset="0"
            tabIndex="0"
          >
            <h4 id="section1" className="mt-3">
              Section 1
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac enim eget nulla consectetur pharetra in ac leo.
            </p>
            <h4 id="section2" className="mt-4">
              Section 2
            </h4>
            <p>
              Mauris fermentum justo ac nisi fermentum, sed fringilla magna
              laoreet. Suspendisse venenatis ex sed nulla facilisis, non cursus
              arcu suscipit.
            </p>
            <h4 id="section3" className="mt-4">
              Section 3
            </h4>
            <p>
              Quisque rhoncus libero ac odio aliquam, a laoreet lacus viverra.
              Etiam vel nisi a magna hendrerit fringilla.
            </p>
          </div>
        </BootstrapScrollSpy>
      </section>

      {/* Tab Component */}
      <section className={styles.componentSection}>
        <h2>Tabs</h2>
        <BootstrapTab>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="tab1-tab"
                data-bs-toggle="tab"
                data-bs-target="#tab1"
                type="button"
                role="tab"
                aria-controls="tab1"
                aria-selected="true"
              >
                Tab 1
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="tab2-tab"
                data-bs-toggle="tab"
                data-bs-target="#tab2"
                type="button"
                role="tab"
                aria-controls="tab2"
                aria-selected="false"
              >
                Tab 2
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="tab1"
              role="tabpanel"
              aria-labelledby="tab1-tab"
            >
              Content for Tab 1
            </div>
            <div
              className="tab-pane fade"
              id="tab2"
              role="tabpanel"
              aria-labelledby="tab2-tab"
            >
              Content for Tab 2
            </div>
          </div>
        </BootstrapTab>
      </section>

      {/* Toast Component */}
      <section className={styles.componentSection}>
        <h2>Toast Example</h2>
        <button type="button" className="btn btn-primary" onClick={showToast}>
          Show Toast
        </button>
        {ToastComponent}
      </section>
    </div>
  );
};

export default BootstrapComponentsShowcase;
