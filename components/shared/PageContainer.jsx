function PageContainer({ children }) {
  return (
    <main
      id="pagecontainer"
      className="m-auto flex h-[calc(100vh - 60px)] w-full flex-col items-center justify-center gap-4 overflow-auto bg-gradient-to-b from-gray-800 to-gray-600"
      style={{ marginTop: "60px" }} // Add margin-top directly in style
    >
      {children}
    </main>
  );
}

export default PageContainer;
