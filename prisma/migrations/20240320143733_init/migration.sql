-- CreateTable
CREATE TABLE `cliente` (
    `id_cliente` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_cliente` VARCHAR(45) NOT NULL,
    `direccion` VARCHAR(100) NOT NULL,
    `correo` VARCHAR(60) NULL,
    `telefono` INTEGER NOT NULL,

    PRIMARY KEY (`id_cliente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `compra` (
    `id_compra` INTEGER NOT NULL AUTO_INCREMENT,
    `importe` DECIMAL(12, 2) NOT NULL,
    `usuario_id_usuario` INTEGER NOT NULL,
    `proveedores_id_proveedores` INTEGER NOT NULL,
    `fecha` DATE NOT NULL,

    INDEX `fk_compra_proveedores1_idx`(`proveedores_id_proveedores`),
    INDEX `fk_compra_usuario_idx`(`usuario_id_usuario`),
    PRIMARY KEY (`id_compra`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `compra_has_producto` (
    `compra_id_compra` INTEGER NOT NULL,
    `producto_sku` VARCHAR(30) NOT NULL,
    `cantidad` INTEGER NOT NULL,

    INDEX `fk_compra_has_producto_compra1_idx`(`compra_id_compra`),
    INDEX `fk_compra_has_producto_producto1_idx`(`producto_sku`),
    PRIMARY KEY (`compra_id_compra`, `producto_sku`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `despacho` (
    `iddespacho` INTEGER NOT NULL AUTO_INCREMENT,
    `venta_id_compra` INTEGER NOT NULL,
    `fecha` DATE NOT NULL,
    `usuario_id_usuario` INTEGER NOT NULL,

    INDEX `fk_despacho_usuario1_idx`(`usuario_id_usuario`),
    INDEX `fk_despacho_venta1_idx`(`venta_id_compra`),
    PRIMARY KEY (`iddespacho`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `posicion` (
    `id_posicion` INTEGER NOT NULL AUTO_INCREMENT,
    `almacen` INTEGER NOT NULL,
    `pasillo` INTEGER NOT NULL,
    `numero_frente` INTEGER NOT NULL,
    `numero_nivel` INTEGER NOT NULL,
    `producto_sku` VARCHAR(30) NULL,
    `cantidad_producto` INTEGER NULL,
    `ocupado` BOOLEAN NOT NULL DEFAULT false,
    `qr` LONGBLOB NOT NULL,

    INDEX `fk_posicion_producto1_idx`(`producto_sku`),
    PRIMARY KEY (`id_posicion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producto_has_venta` (
    `producto_sku` VARCHAR(30) NOT NULL,
    `venta_id_compra` INTEGER NOT NULL,
    `cantidad` VARCHAR(45) NOT NULL,

    INDEX `fk_producto_has_venta_producto1_idx`(`producto_sku`),
    INDEX `fk_producto_has_venta_venta1_idx`(`venta_id_compra`),
    PRIMARY KEY (`producto_sku`, `venta_id_compra`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producto_inv` (
    `numero_pzs` INTEGER NOT NULL,
    `sku` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`sku`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producto_prov` (
    `sku` VARCHAR(30) NOT NULL,
    `nombre` VARCHAR(45) NOT NULL,
    `foto` LONGBLOB NULL,
    `descripcion` MEDIUMTEXT NOT NULL,
    `costo_compra` DECIMAL(10, 2) NOT NULL,
    `precio_venta` DECIMAL(10, 2) NOT NULL,
    `peso` DOUBLE NOT NULL,
    `volumen` DOUBLE NOT NULL,

    PRIMARY KEY (`sku`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `proveedores` (
    `id_proveedores` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(45) NOT NULL,
    `direccion` VARCHAR(45) NULL,
    `correo` VARCHAR(45) NOT NULL,
    `telefono` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id_proveedores`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `recepcion` (
    `id_recepcion` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario_id_usuario` INTEGER NOT NULL,
    `compra_id_compra` INTEGER NOT NULL,
    `fecha` DATE NOT NULL,

    INDEX `fk_recepcion_compra1_idx`(`compra_id_compra`),
    INDEX `fk_recepcion_usuario1_idx`(`usuario_id_usuario`),
    PRIMARY KEY (`id_recepcion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `password` MEDIUMTEXT NOT NULL,
    `almacen` MEDIUMTEXT NOT NULL,
    `user` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `usuario_user_key`(`user`),
    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `venta` (
    `id_compra` INTEGER NOT NULL AUTO_INCREMENT,
    `importe` DECIMAL(12, 2) NOT NULL,
    `usuario_id_usuario` INTEGER NOT NULL,
    `cliente_id_cliente` INTEGER NOT NULL,
    `fecha` DATE NOT NULL,

    INDEX `fk_venta_cliente1_idx`(`cliente_id_cliente`),
    INDEX `fk_venta_usuario1_idx`(`usuario_id_usuario`),
    PRIMARY KEY (`id_compra`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
